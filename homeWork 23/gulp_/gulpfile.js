const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const rename = require('gulp-rename');


gulp.task('styles', () => {
    return gulp.src('src/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', () => {
    return gulp.src('src/index.js')
        .pipe(concat('scripts.js'))
        .pipe(terser())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'));
});


gulp.task('default', gulp.parallel('styles', 'scripts'));
