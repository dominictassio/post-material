var gulp = require('gulp');
var postcss = require('gulp-postcss');

var cssnext = require('cssnext');
var mixins = require('postcss-mixins');

gulp.task('css', function() {
    gulp.src('./src/css/post-material.css')
        .pipe(postcss([
            cssnext({
                sourcemap: true
            }),
            mixins()
        ]))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(gulp.dest('./docs/css/'));
});

gulp.task('default', ['css']);
