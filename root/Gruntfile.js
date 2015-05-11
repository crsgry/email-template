module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Build html
        middleman: {
            options: {
                useBundle: true
            },
            server: {},
            build: {
                options: {
                    command: "build"
                }
            }
        },
        // Format html file
        prettify: {
            options: {
                // Task-specific options go here.
            },
            one: {
                src: 'build/index.html',
                dest: '_output/index.html'
            }
        },
        // Run the text converter
        execute: {
            simple_target_with_args: {
                options: {
                    // execute node with additional arguments
                    args: ['_output/index.html']
                },
                src: ['node_modules/node-text-converter/converter.js']
            }
        },
        'special-html': {
            compile: {
                files: {
                   '_output/index.html': '_output/index.html',
                }
            }
        }
});
grunt.loadNpmTasks('grunt-middleman');
grunt.loadNpmTasks('grunt-prettify');
grunt.loadNpmTasks('grunt-node-text-converter');
grunt.loadNpmTasks('grunt-execute');
grunt.loadNpmTasks('grunt-special-html');
grunt.registerTask('default', ['middleman', 'prettify', 'execute', 'special-html']);
};