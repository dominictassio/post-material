var gulp = require('gulp');

var postcss = require('gulp-postcss');
var cssnext = require('cssnext');

gulp.task('css', function() {
    var processors = [
        cssnext
    ];
	gulp.src('src/css/post-material.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['css']);
