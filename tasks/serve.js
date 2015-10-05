var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('serve', function (cb) {
  runSequence('build',
              'server',
              'watch',
               cb);
});
