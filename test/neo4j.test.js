'use strict';

const mock = require('egg-mock');

describe('test/neo4j.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/neo4j-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, neo4j')
      .expect(200);
  });
});
