const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function styles() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./dist/css'));
}

function scripts() {
    return gulp.src('./src/JavaScript_project/homeWork 23/index.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

exports.styles = styles;
exports.scripts = scripts;
exports.default = gulp.parallel(styles, scripts);