module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: ['Gruntfile.js', 'src/*.js'],
                tasks: ['compile-js']
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/duc.min.js': ['dist/duc.js'],
                }
            }
        },
        concat: {
            js: {
                options: {
                        separator: ';'
                },
                files: {
                    'dist/duc.js': 'src/duc.js',
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('compile-js', ['concat', 'uglify']);
};
