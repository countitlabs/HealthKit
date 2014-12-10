module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ['www/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-jshint');

};
