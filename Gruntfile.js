module.exports = function (grunt) {

  grunt.initConfig({
    pkg: '<json:package.json>',
    jshint: {
      files: [
        'app.js',
        'Gruntfile.js',
      ],
      options: {
        laxcomma: true,
        esnext: true,
      },
    },
    mochacov: {
      options: {
        coveralls: {
          serviceName: 'travis-ci'
        },
      },
      options: {
        files: 'test/*.js'
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-cov');

  grunt.registerTask('default', ['mochacov']);

};