var gulp = require('gulp');
var cssnext = require('gulp-cssnext');


gulp.task('css', function() {
  return gulp.src('src/css/*.css')
  .pipe(cssnext({
      compress: false,
      import: true,
      plugins: [
        require("postcss-for")
      ]
    }))
  .pipe(gulp.dest('build/css/'))
});
