var should = require('should')
  , request = require('supertest')
  , server = require('../app').server
;

describe('GET /', function () {
  it('should return status 200', function (done) {
    request(server)
      .get('/')
      .expect(200)
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
