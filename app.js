'use strict';

const neo4j = require('./lib/neo4j');

module.exports = (app) => {
  if (app.config.neo4j.app) neo4j(app);
};
