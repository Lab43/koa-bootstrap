var koa = require('koa')
  , logger = require('koa-logger')
  , http = require('http')
  , app = koa()
  , router = require('koa-router')
  , config = require('./config')(app.env)
  , views = require('koa-render')
  , staticCache = require('koa-static-cache')
  , files = {} // for static file cache
  , mount = require('koa-mount')
;

// configure server
app.use(logger());

// static files
app.use(mount('/public', staticCache('./public', {}, files)));
staticCache('./bower_components', {}, files);

// views rendering
app.use(views('./views', 'jade', {
  locals: {
    siteName: config.name
  }
}));

// load routes
app.use(router(app));
require('./routes')(app); 

// start server
app.listen(config.port);
console.log(config.name + ' running on port ' + config.port);

// export server for testing
exports.server = http.createServer(app.callback());