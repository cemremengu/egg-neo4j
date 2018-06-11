'use strict';

const assert = require('assert');
const neo4j = require('neo4j-driver').v1;

module.exports = (app) => {
  app.addSingleton('neo4j', create);
};

async function create(config, app) {
  assert(config.url, `[egg-neo4j] 'url: ${config.url}' is required on config`);

  app.coreLogger.info('[egg-neo4j] connecting %s', config.url);
  const driver = neo4j.driver(config.url, neo4j.auth.basic(config.username, config.password));

  const session = driver.session();

  const result = await session.run(`RETURN timestamp()`);

  session.close();

  app.beforeStart(function*() {
    app.coreLogger.info(`[egg-neo4j] status OK, ${result}`);
  });

  app.beforeClose(function*() {
    driver.close();
  });

  return driver;
}
