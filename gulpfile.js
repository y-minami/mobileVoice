var gulp = require('gulp');
var browserSync = require('browser-sync');

const STATIC_ROOT = './docs';

// DEV SERVER
gulp.task('server', function () {
  browserSync.init({
    port: 3010,
    server: {
      baseDir: STATIC_ROOT
    }
  });

  gulp.watch(STATIC_ROOT + '/**/*', function() {

    browserSync.reload();
  });
});
