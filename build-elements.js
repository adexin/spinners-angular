#!/usr/bin/env node

const fs = require('fs');
const util = require('util');
const path = require('path');

const exec = util.promisify(require('child_process').exec);
const readdir = util.promisify(fs.readdir);
const rename = util.promisify(fs.rename);
const copyFile = util.promisify(fs.copyFile);

const srcPath = path.join('projects', 'elements', 'src');
const entriesPath = path.join(srcPath, 'entrypoints');
const distPath = 'dist-elements';

async function buildEntryPoints() {
  const files = await readdir(entriesPath);
  const promises = files.map((file, i) => async () => {
    console.log('Building entry point', file);
    await copyFile(path.join(entriesPath, file), path.join(srcPath, 'main.ts'));
    await exec('ng build --prod --outputHashing=none elements');
    await exec(`npx cpy 'dist-element' '${distPath}'`);
    await rename(path.join(distPath, 'main-es5.js'), path.join(distPath, `${file.replace('.ts', '')}-es5.js`));
    await rename(path.join(distPath, 'main-es2015.js'), path.join(distPath, `${file.replace('.ts', '')}-es2015.js`));
  });

  await promises.reduce(
    (acc, promise) => acc.then(promise),
    Promise.resolve()
  );
}

buildEntryPoints()
  .then(() => {
    process.exit();
  })
  .catch(err => {
    console.log('Error building endpoints:', err);
    process.exit(1);
  });
