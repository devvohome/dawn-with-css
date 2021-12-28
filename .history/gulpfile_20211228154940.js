const { src, dest, task } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

task('sass', function(){
    return src('styles/*.scss')
    .pipe(sass)
    .pipe(dest)
});

task('watch', function(){});

