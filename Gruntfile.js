module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            js: ["src/**/*.js", "src/**/*.js.map"]
        },
        ts: {
            source: {
                tsconfig: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ts');
    grunt.registerTask('default', ['ts']);
};