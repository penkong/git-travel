var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();
// ========================
// =============================

//inject css from posted css file to index that watched by browserSync.
//styles task is dependency inside arry = new Arg (run before other and first complete it)
gulp.task('cssInject', ['styles'], function () {
  return gulp.src('./app/temp/styles/styles.css')
    //stream method make everything we pipe in available in browser
    .pipe(browserSync.stream());
});

//=========================================

gulp.task('watch', function () {
  // automate serve us watch app folder from distance of gulp.js
  // can add other setting in init method
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/index.html', function () {
    // watch and refresh page on save
    browserSync.reload();
  })

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('cssInject');
  })


  watch('./app/assets/scripts/**/*.js', function () {
    gulp.start('scriptsRefresh');
  })
});

// /============================
gulp.task('scriptsRefresh', ['scripts'], function () {
  browserSync.reload();
})







// gulp.task('default', function () {
//   console.log("gooray gulp task");
// });
// // 
// gulp.task('html', function () {
//   console.log("imagine sth to html");
// });