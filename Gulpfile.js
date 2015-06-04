var gulp = require('gulp');
var cssnext = require('gulp-cssnext');

gulp.task('css', function() {
	gulp.src('src/css/post-material.css')
		.pipe(cssnext({
			sourcemap: true,
            compress: true
		}))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['css']);
