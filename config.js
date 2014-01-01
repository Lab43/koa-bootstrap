var config = {
  all: {
    name: 'saas-bootstrap',
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