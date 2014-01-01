var koa = require('koa')
  , http = require('http')
  , app = koa()
  , config = require('./config')(app.env)
;

// load routes
require('./routes')(app); 

app.listen(config.port);
console.log(config.name + ' running on port ' + config.port);

// export server for testing
exports.server = http.createServer(app.callback());