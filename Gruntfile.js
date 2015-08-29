module.exports = function (grunt) {
  'use strict';

  var config = {
    simplemocha: {
      test: {
        src: 'test/node.js',
        options: {
          globals:     ['should', 'showdown'],
          timeout:     3000,
          ignoreLeaks: false,
          reporter:    'spec'
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.registerTask('test', ['jshint', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};