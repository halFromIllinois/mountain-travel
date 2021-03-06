var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');


gulp.task('styles', function(){
    return gulp.src('./app/assets/css/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .on('error', function(errInfo){
        console.log(errInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
})
