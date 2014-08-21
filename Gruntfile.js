module.exports = function(grunt) {

	grunt.initConfig({
		compass: {
			dev: {
				options: {
					sassDir: 'scss',
					cssDir: 'css',
					imagesDir: 'img'
				}
			}
		},
		connect: {
			server: {
				options: {
					port: 8000
				}
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			html: {
				files: ['**/*.html']
			},
			js: {
				files: ['js/**/*.js']
			},
			sass: {
				files: ['scss/**/*.scss'],
				tasks: ['compass'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['style.css']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['connect', 'build', 'watch']);
	grunt.registerTask('build', ['compass']);

};