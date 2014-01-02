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
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', ['jshint', 'mochaTest']);

};