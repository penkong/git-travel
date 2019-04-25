var gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssVars = require('postcss-simple-vars'),
  nested = require('postcss-nested');

gulp.task('default', function () {
  console.log("gooray gulp task");
});
// 
gulp.task('html', function () {
  console.log("imagine sth to html");
});

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssVars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

// =============================
gulp.task('watch', function () {
  watch('./app/index.html', function () {
    gulp.start('html');
  })
  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  })
});