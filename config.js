var config = {
  all: {
    name: 'Useful Science',
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
