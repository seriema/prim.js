'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            '* <%= pkg.homepage %>\n' +
            '* Licensed <%= pkg.license %> */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['src/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            },
        },
        uglify: {
            options: {
                banner: '<%= banner %>',
                report: 'gzip'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            },
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            src: {
                src: ['src/**/*.js']
            },
            test: {
                src: ['test/**/*.js']
            },
        },
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task.
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

    // Test task.
    grunt.registerTask('test', ['jshint']);
};
