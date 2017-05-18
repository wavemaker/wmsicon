/*jshint node:true*/

var path = require('path');

module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		webfont: {
			wmsicon: {
				src: 'src/*.svg',
				dest: 'dist/wmsicon',
				options: {
					hashes: false,
					dest: 'dist/wmsicon/fonts',
					destCss: 'dist/wmsicon',
                    fontFamilyName: 'wms',
                    font:'wmsicon'
				}
			}
		}, 
		jshint: {
			all: ['Gruntfile.js', 'tasks/*.js', 'test/*.js'],
			options: {
				jshintrc: true
			}
		},
		watch: {
			scripts: {
				files: '<%= jshint.all %>',
				tasks: ['jshint', 'jscs'],
				options: {
					debounceDelay: 100,
					nospawn: true
				}
			}
		},
		jscs: {
			options: {
				config: ".jscs.json"
			},
			all: ['tasks/*.js']
		},
		clean: ['test/tmp']
	});

	grunt.loadTasks('tasks');

	grunt.registerTask('default', ['jshint', 'jscs', 'clean', 'webfont', 'test', 'clean']);

};
