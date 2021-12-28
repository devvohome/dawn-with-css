const { src, dest, task } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

task('sass', function(){
    return src('styles/*.scss')
    
});

task('watch', function(){});

