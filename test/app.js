var should = require('should')
  , request = require('supertest')
  , server = require('../app').server
;

describe('GET /', function () {
  it('should return "Hello World"', function (done) {
    request(server)
      .get('/')
      .expect(200, 'Hello World')
      .end(function (err, res) {
        done(err);
      });
  });
});

describe('GET /foo', function () {
  it('should return a 404 error', function (done) {
    request(server)
      .get('/foo')
      .expect(404)
      .end(function (err, res) {
        done(err);
      });
  });
});