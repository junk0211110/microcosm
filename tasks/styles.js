var gulp        = require('gulp');
var runSequence = require('run-sequence');
var concatCss   = require('gulp-concat-css');
var minifyCSS   = require('gulp-minify-css');
var browserSync = require('browser-sync');
var plumber     = require('gulp-plumber');
var sass        = require('gulp-sass');
var del         = require('del');

gulp.task('styles', function () {
  return gulp.src(['assets/styles/**.css', 'assets/styles/**.scss'])
  .pipe(sass())
  .pipe(concatCss('site.min.css'))
  .pipe(minifyCSS({debug: true}))
  .pipe(gulp.dest('./dist/assets'))
  .pipe(browserSync.stream());
});
