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
        if (err) return done(err);
        done();
      });
  });
});