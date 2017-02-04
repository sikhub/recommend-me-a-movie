var
  gulp = require('gulp'),
  $ = require('gulp-load-plugins')()
;
 
gulp.task('glyph', function () {
  return gulp.src('fontello.json')
    .pipe($.fontello())
    .pipe($.print())
    .pipe(gulp.dest('public'))
});