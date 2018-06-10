'use strict';

const mock = require('egg-mock');

describe('test/arango.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/arango-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, arango')
      .expect(200);
  });
});
