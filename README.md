# Spinners Angular
[![npm](https://img.shields.io/npm/v/spinners-angular.svg)](http://npm.im/spinners-angular) [![License](https://img.shields.io/github/license/adexin/spinners-angular.svg)](https://github.com/adexin/spinners-angular/blob/master/LICENSE.md) [![Build Status](https://img.shields.io/travis/com/adexin/spinners-angular/master.svg)](https://travis-ci.com/github/adexin/spinners-angular) [![Coverage Status](https://coveralls.io/repos/github/adexin/spinners-angular/badge.svg?branch=master)](https://coveralls.io/github/adexin/spinners-angular?branch=master) [![gzip size](http://img.badgesize.io/https://unpkg.com/spinners-angular/bundles/spinners-angular.umd.min.js?compression=gzip&label=gzip)](https://unpkg.com/spinners-angular/bundles/spinners-angular.umd.min.js)


9 awesome spinners built as angular components. Server side rendering with Angular Universal, AOT, Ivy/NGCC and Angular Elements are supported.

<p align="center">
  <a href="http://adexin.github.io/spinners/angular">
    <img src="https://i.imgur.com/Sv5vNTU.gif" />
  </a>
</p>

## Demo
[View demo](https://adexin.github.io/spinners/angular) with examples of angular component usage.

## Getting started
### Installation
```
$ npm install spinners-angular
```
**or** [add it directly to HTML page as angular elements](#Angular-Elements-usage)

### Usage
Add spinners module to module.ts
#### All spinners at once
```
import { SpinnersAngularModule } from 'spinners-angular';

@NgModule({
  imports: [ SpinnersAngularModule ]
})
```
#### Single spinner
```
import { SpinnerCircularModule } from 'spinners-angular/spinner-circular';

@NgModule({
  imports: [ SpinnerCircularModule ]
})
```
Use it in the template
```
<sa-spinner-circular></sa-spinner-circular>
```

### Hide spinner
For angular component
```
<sa-spinner-circular [enabled]="false"></sa-spinner-circular>
```
For angular element
```
<sa-spinner-circular enabled=""></sa-spinner-circular>
```

### List of components

| Component | Example | Component | Example | Component | Example |
|-----------|---------|-----------|---------|-----------|---------|
|`sa-spinner-circular`|<img width="70" src="https://i.imgur.com/TXXVX12.gif" />|`sa-spinner-circular-fixed`| <img width="70" src="https://i.imgur.com/NCnyifq.gif" />|`sa-spinner-circular-split`| <img width="70" src="https://i.imgur.com/JJ44o82.gif" />|
|`sa-spinner-round`   |<img width="70" src="https://i.imgur.com/Sx7gh0D.gif" />|`sa-spinner-round-outlined`|<img width="70" src="https://i.imgur.com/smEIw8n.gif" /> |`sa-spinner-round-filled`  |<img width="70" src="https://i.imgur.com/rF3ogJ5.gif" />|
|`sa-spinner-dotted`  |<img width="70" src="https://i.imgur.com/ZWBUC6P.gif" />|`sa-spinner-infinity`     |<img width="70" src="https://i.imgur.com/wLgV52R.gif" /> |`sa-spinner-diamond`      |<img width="70" src="https://i.imgur.com/lhkmiLf.gif" />|

## Properties
The following optional properties are available.

| Property     | Default value      | Type           | Description |
|--------------|--------------------|----------------|-------------|
|size          |`50`                |number or string|Set the size as number of pixels or any valid CSS string (e.g. `size="100%"`).|
|thickness     |`100`               |number          |Set lines width as a percentage of default thickness.|
|сolor         |`'#38ad48'`         |string          |Set the color. Can be set to any valid CSS string (hex, rgb, rgba).|
|secondaryColor|`'rgba(0,0,0,0.44)'`|string          |Set the secondary color. Can be set to any valid CSS string (hex, rgb, rgba).|
|speed         |`100`               |number          |Set the animation speed as a percentage of default speed.|
|enabled       |`true`              |boolean         |Show/Hide the spinner.|
|still         |`false`             |boolean         |Disable/Enable spinner animation.|
|styles        |undefined           |object          |Pass CSS styles to the root SVG element|

Use dash-separated lowercase for angular elements attribute names.
Web Components don't support passing anything other than string values via attributes,
thus for "styles" attribute you can either set property with js:
```
<script>
  document.querySelector('sa-spinner-circular').styles = { 'background-color': 'grey' };
</script>
```

or pass object as json string:
```
  <!-- using single quotes to wrap json -->
  <sa-spinner-circular-fixed styles='{"background-color": "red"}'></sa-spinner-circular-fixed>
  <!-- escaping quotes -->
  <sa-spinner-circular styles="{&quot;background-color&quot;: &quot;grey&quot;}"></sa-spinner-circular>

```

## Minimizing Bundle Size
As well as loading all spinners at once it's possible to leverage code splitting and load a specific one:
```
import { SpinnersAngularModule } from 'spinners-angular';
```
vs
```
import { SpinnerCircularModule } from 'spinners-angular/spinner-circular';
```

## Angular Elements usage
```
<!doctype html>
<html>
  <head>
    <script src="https://unpkg.com/spinners-angular/elements/polyfills-es5.js"></script>
    <script src="https://unpkg.com/spinners-angular/elements/runtime-es5.js"></script>
    <!--
      to load a specific spinner
      (only one supported, load all spinners if more than one is used to reduce loaded js size)
    -->
    <script src="https://unpkg.com/spinners-angular/elements/spinner-circular-es5.js"></script>
    <!-- to load all spinners at once -->
    <script src="https://unpkg.com/spinners-angular/elements/spinners-es5.js"></script>
  </head>

  <body>
    <sa-spinner-circular></sa-spinner-circular>
  </body>
</html>
```

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br> Edge |
| --------- | --------- | --------- | --------- | --------- |
| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions*

**\*** - Legacy EdgeHTML Edge (i.e. 42-44) is also supported except for `sa-spinner-round` and `sa-spinner-round-outlined`.

## Issues and Bugs

Let us know if you [found a bug](https://github.com/adexin/spinners-angular/issues)!

## Spinners for other frameworks

- [spinners-react](https://github.com/adexin/spinners-react)

## Support and Contact

Have a quick question or need some help? Please do not hesitate to contact us via email at info@adexin.com.

## Credits

This component is developed by consulting agency [Adexin](https://adexin.com/).

## License

Spinners Angular is released under MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.
