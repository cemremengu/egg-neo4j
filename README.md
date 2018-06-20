# egg-neo4j

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-neo4j.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-neo4j
[travis-image]: https://img.shields.io/travis/cemremengu/egg-neo4j.svg?style=flat-square
[travis-url]: https://travis-ci.org/cemremengu/egg-neo4j
[david-image]: https://img.shields.io/david/cemremengu/egg-neo4j.svg?style=flat-square
[david-url]: https://david-dm.org/cemremengu/egg-neo4j
[snyk-image]: https://snyk.io/test/npm/egg-neo4j/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-neo4j
[download-image]: https://img.shields.io/npm/dm/egg-neo4j.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-neo4j

Neo4j for egg framework.

## Install

```bash
$ npm i egg-neo4j --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.neo4j = {
  enable: true,
  package: 'egg-neo4j',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.neo4j = {
  client: {
    url: 'bolt://127.0.0.1',
    username: 'neo4j',
    password: 'admin',
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

Assume that we have `User` nodes in our database and we want to fetch all of them:

```js
async function all() {
  const session = this.ctx.app.neo4j.session();

  try {
    const result = await session.run('MATCH(user:User) RETURN user');
    return result.records.map((item) => item.get('user').properties);
  } finally {
    session.close();
  }
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/cemremengu/egg-neo4j/issues).

PRs welcome!

## License

[MIT](LICENSE)
