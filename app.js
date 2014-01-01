var koa = require('koa')
  , route = require('koa-route')
  , http = require('http')
  , app = koa()
  , config = require('./config')(app.env)
;

app.use(route.get('/', function *() {
  this.body = 'Hello World';
}));

app.listen(config.port);
console.log(config.name + ' running on port ' + config.port);

// export server for testing
exports.server = http.createServer(app.callback());