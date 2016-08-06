module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Server
		connect: {
			server: {
				options: {
					port: 9000,
					base: 'www',
					keepalive: true,
				}
			}
		},


		// CSS compilation
		cssmin: {
			build: {
				src: 'www/css/master.css',
				dest: 'www/css/master.css'
			}
		},

		sass: {
			dist: {
				files: {
					'www/css/master.css': 'assets/sass/master.scss'
				}
			}
		},


		// JS compilation
		uglify: {
			js: {
				files: {
					'www/js/master.min.js': 'assets/javascript/*.js'
				}
			},

			bower: {
				files: {
					'www/js/jquery.min.js' 		: 'bower_components/jquery/dist/jquery.js',
				}
			}
		},


		// Asset Watch
		watch: {
			css: {
				files: ['assets/sass/*.scss'],
				tasks: ['buildcss']
			},
			js: {
				files: ['assets/js/*.js'],
				tasks: ['uglify:js']
			},
		}
	});

	grunt.registerTask('default', []);
	grunt.registerTask('buildcss',  ['sass', 'cssmin']);
};