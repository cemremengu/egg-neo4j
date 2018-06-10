'use strict';

const neo4j = require('./lib/neo4j');

module.exports = (agent) => {
  if (agent.config.neo4j.agent) neo4j(agent);
};
