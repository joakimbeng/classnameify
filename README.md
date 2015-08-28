# classnameify

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> Generate classname selectors for CSS components, works splendid together with e.g. React

## Why?

Generating classnames according to the contents of CSS declarations solves the biggest problem with large scale CSS, i.e. the fact that it cascades. See [`unistyle`](https://www.npmjs.com/package/unistyle) for how to use this in a scalable way.

## Installation

Install `classnameify` using [npm](https://www.npmjs.com/):

```bash
npm install --save classnameify
```

## Usage

### Module usage

```javascript
var classnameify = require('classnameify');

classnameify({
  myComponent: {
    color: '#FFF',
    fontSize: '10px'
  }
});
/*
 {
  '._e80a8a8': {
    color: '#FFF',
    fontSize: '10px'
  }
 }
*/
```

#### Usage together with e.g. React

Have a look at [`unistyle`](https://www.npmjs.com/package/unistyle) for how this fits together with [React](http://facebook.github.io/react/).


## API

### `classnameify(val)`

| Name | Type | Description |
|------|------|-------------|
| val | `Object|Array` | The CSS components to classnameify |

Returns: `Object`.

## License

MIT © Joakim Carlstein

[npm-url]: https://npmjs.org/package/classnameify
[npm-image]: https://badge.fury.io/js/classnameify.svg
[travis-url]: https://travis-ci.org/joakimbeng/classnameify
[travis-image]: https://travis-ci.org/joakimbeng/classnameify.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
