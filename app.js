var koa = require('koa')
  , http = require('http')
  , app = koa()
;

app.use(function *() {
  this.body = 'Hello World';
});

app.listen(3000);

// export server for testing
exports.server = http.createServer(app.callback());