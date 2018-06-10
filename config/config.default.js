'use strict';

exports.neo4j = {
  default: {
    url: 'bolt://localhost:7687',
    username: 'neo4j',
    password: 'neo4j',
  },
  app: true,
  agent: false,
};
