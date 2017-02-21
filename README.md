# fe-heroes

[![Travis](https://img.shields.io/travis/vutran/fe-heroes/develop.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/vutran/fe-heroes) [![Coveralls branch](https://img.shields.io/coveralls/vutran/fe-heroes/develop.svg?maxAge=2592000&style=flat-square)](https://coveralls.io/github/vutran/fe-heroes) [![license](https://img.shields.io/github/license/vutran/fe-heroes.svg?maxAge=2592000&style=flat-square)](LICENSE)

> Retrieve heroes from Fire Emblem Heroes.

## Install

```bash
$ npm install --save fe-heroes
```

## Usage

```js
import feHeroes from 'fe-heroes';

const heroes = feHeroes.getAll();

console.log(heroes);

/*
[
    {
        name: 'Anna',
        title: 'Commander',
    },
    ...
]
*/
```

## API

### getAll()

Returns a `Promise` that resolves a list of heroes.

## License

MIT © [Vu Tran](https://github.com/vutran/)
