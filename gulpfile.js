const gulp      = require('gulp'),
  $             = require('gulp-load-plugins')(),
  rimraf        = require('rimraf'),
  fs            = require('fs')

const clean = done => rimraf('build/**/*', [], done)

const scss = () =>
  gulp.src('./scss/style.scss')
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe(gulp.dest('./dest'))

const res = () =>
  gulp.src('./res/*')
    .pipe(gulp.dest('./dest'))

const js = () =>
  gulp.src('./js/*')
    .pipe(gulp.dest('./dest'))

const html = () =>
  gulp.src('./html/*')
    .pipe(gulp.dest('./dest'))

exports.default = gulp.series(clean, scss, res, js, html)
