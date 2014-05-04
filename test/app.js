var should = require('should')
  , request = require('supertest')
  , server = require('../app').server
  , config = require('../config')(process.env.NODE_ENV || 'development')
;

describe('GET /', function () {
  it('should return status 200', function (done) {
    request(server)
      .get('/')
      .expect(200, done)
    ;
  });
});

describe('GET /foo', function () {
  it('should return a 404 error', function (done) {
    request(server)
      .get('/foo')
      .expect(404, done)
    ;
  });
});

// make sure all front-end scripts are available
config.scripts.forEach(function (script) {
  describe('GET /' + script, function () {
    it('should return status 200', function (done) {
      request(server)
        .get('/' + script)
        .expect(200, done)
      ;
    });
  });
});

// make sure all stylesheets are available
config.stylesheets.forEach(function (stylesheet) {
  describe('GET /' + stylesheet, function () {
    it('should return status 200', function (done) {
      request(server)
        .get('/' + stylesheet)
        .expect(200, done)
      ;
    });
  });
});
