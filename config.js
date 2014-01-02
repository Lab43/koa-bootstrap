var config = {
  all: {
    name: 'SAAS Bootstrap',
    port: 3000,
  },
  development: {
  },
  production: {
  },
}

module.exports = function (env) {
  return require('underscore').extend(config.all, config[env]);
};