var gulp = require('gulp'),
  webpack = require('webpack');

gulp.task('scripts', function (callback) {
  webpack(require('../../webpack.config'), function (err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
})
// var gulp = require('gulp'),
//   webpack = require('webpack');

// gulp.task('scripts', function (callback) {
//   webpack(require('../../webpack.config'), function (err, stats) {
//     if (err) {
//       console.log(err.toString());
//     }
//     console.log(stats.toString());
//     callback();
//   });
// })

// const gulp = require('gulp');
// const webpack = require('webpack');
// const webpackStream = require('webpack-stream');
// const webpackConfig = require('../../webpack.config');
// const del = require('del');

// gulp.task('scriptClean', function () {
//   return del(['./app/temp/scripts/**/*.js']);
// });

// gulp.task('scripts', ['scriptClean'], () => {
//   gulp.src('./app/assets/scripts/**/*.js')
//     .pipe(webpackStream(webpackConfig), webpack)
//     .pipe(gulp.dest('./app/temp/scripts/.js'));
// });