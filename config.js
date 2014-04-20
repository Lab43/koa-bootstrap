var config = {
  all: {
    name: 'Koa Bootstrap',
    port: process.env.PORT || 3000,
  },
  development: {
  },
  production: {
  },
}

module.exports = function (env) {
  return require('underscore').extend(config.all, config[env]);
};
