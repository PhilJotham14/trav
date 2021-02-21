// All used modules
var gulp = require('gulp')

// Development tasks
gulp.task('travis', ['build','testServerJS'], function() {
    process.exit(0);
})