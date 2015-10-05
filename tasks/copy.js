var gulp        = require('gulp');

gulp.task('copy-images', function () {
  return gulp.src('assets/img/**.*')
    .pipe(gulp.dest('./dist/assets/img'));
});

gulp.task('copy-index', function () {
  return gulp.src('assets/index.html')
    .pipe(gulp.dest('./dist'));
});
