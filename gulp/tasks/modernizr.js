const gulp = require('gulp'),
  modernizr = require('gulp-modernizr');



gulp.task('modernizr', function () {
  // point toward files we need to br lightweight
  return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./app/temp/scripts'));
});