# babel-plugin-dynamic-import-amd

Babel plugin to transpile `import()` to `require`, for AMD module loaders

**NOTE:** Babylon v6.12.0 is required to correctly parse dynamic imports.

[![Build Status](https://travis-ci.org/genkgo/babel-plugin-dynamic-import-amd.png?branch=master)](https://travis-ci.org/genkgo/babel-plugin-dynamic-import-amd)

## Installation

```sh
$ npm install babel-plugin-dynamic-import-amd --save-dev
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["dynamic-import-amd"]
}
```

### Via CLI

```sh
$ babel --plugins dynamic-import-amd script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["dynamic-import-amd"]
});
```

## Syntax

Now just use syntax from [the proposal for adding a "function-like" import() module loading syntactic form](https://github.com/tc39/proposal-dynamic-import) to
JavaScript. It is currently in stage 3 of the TC39 process. 

```js
import('module-name');

let name = '-name';
import(`module-${name}`);
```


## Credits

Many credits go to [AirBNB's package babel-plugin-dynamic-import-webpack](https://github.com/airbnb/babel-plugin-dynamic-import-webpack).
This package contains the same tests as that library. And it formed the base for the actual dynamic import
implementation.