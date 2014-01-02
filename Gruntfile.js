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
          reporter: 'spec',
        },
        src: ['test/**/*.js'],
      },
    },
    concurrent: {
      dev: {
        tasks: ['nodemon', 'compass'],
        options: {
          logConcurrentOutput: true,
        },
      },
    },
    compass: {
      dev: {
        options: {
          config: 'config.rb',
          watch: true,
        },
      },
    },
    nodemon: {
      dev: {
        options: {
          file: 'app.js',
          nodeArgs: ['--harmony'],
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', ['jshint', 'mochaTest']);

  grunt.registerTask('watch', ['concurrent']);

};