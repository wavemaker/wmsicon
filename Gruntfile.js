var path = require('path');

module.exports = function (grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-webfont');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.initConfig({
		webfont: {
			wmsicon: {
				src: 'src/**/*.svg',
				dest: 'dist/wmsicon/fonts',
				destCss: 'dist/wmsicon/css',
				options: {
					hashes: false,
					fontFamilyName: 'wms',
					templateOptions: {
						baseClass: "wms",
						classPrefix: "wms-",
						mixinPrefix: "wms-"
					},
					htmlDemoTemplate: 'templates/demo.html',
					font: 'wmsicon'
				}
			}
		},
		clean: ['dist/wms']
	});

	grunt.loadTasks('tasks');

	grunt.registerTask('default', ['clean', 'webfont'/*, 'clean'*/]);

};
