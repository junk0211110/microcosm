var gulp        = require('gulp');
var browserSync = require('browser-sync');

function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', function () {
  gulp.watch(['assets/styles/**.css', 'assets/styles/**.scss'], ['styles']).on('change', reportChange);
  gulp.watch('assets/js/**.js', ['javascript']).on('change', reportChange);
  gulp.watch('assets/index.html', ['copy-index']).on('change', reportChange);
  gulp.watch(['./dist/index.html', './dist/assets/img/**.*'], browserSync.reload).on('change',reportChange );
  gulp.watch('assets/img/**.*', ['copy-images']).on('change', reportChange);
});
