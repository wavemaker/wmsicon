/*jshint node:true*/

var path = require('path');

module.exports = function (grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		webfont: {
			wmsicon: {
				src: 'src/**/*.svg',
				dest: 'dist/wmsicon',
				options: {
					hashes: false,
					dest: 'dist/wmsicon/fonts',
					destCss: 'dist/wmsicon/css',
					fontFamilyName: 'wms',
					font: 'wmsicon'
				}
			}
		},
		// svgstore: {
		// 	options: {
		// 		prefix: 'wms-',
		// 		svg: {
		// 			viewBox: '0 0 100 100',
		// 			xmlns: 'http://www.w3.org/2000/svg'
		// 		}
		// 	},
		// 	default: {
		// 		files: {
		// 			'dist/wmsicon/proavatar.svg': ['src/project-icons/*.svg'],
		// 		},
		// 	},
		// },
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

	grunt.registerTask('default', ['jshint', 'jscs', 'webfont', /*'svgstore',*/ 'clean']);

};
