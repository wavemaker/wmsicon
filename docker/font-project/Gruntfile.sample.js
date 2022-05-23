module.exports = function(grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-webfont');

	grunt.initConfig({
		webfont: {
			myfont: {
				src: 'src/*.svg',
				dest: 'dist/my-font/fonts',
				destCss: 'dist/my-font/css',
				options: {
					hashes: false,
					fontBaseName: 'my-font',
					fontFamilyName: 'my-font',
					templateOptions: {
						baseClass: "my-font",
						classPrefix: "my-font",
						mixinPrefix: "my-font"
					},
					// stylesheet: 'css',
					// fontFilename: 'wm-streamline-icon',
					htmlDemoTemplate: 'templates/demo.html',
					font: 'wm-streamline-light-icon'
				}
			}
		},
		clean: ['dist']
	});

	grunt.loadTasks('tasks');
	grunt.registerTask('default', ['webfont'/*, 'test', 'clean'*/]);
	grunt.registerTask('build', ['default']);

};
