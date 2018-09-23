const gulp      = require('gulp'),
  $             = require('gulp-load-plugins')(),
  rimraf        = require('rimraf'),
  fs            = require('fs')

gulp.task('clean', () => rimraf.sync('build/**/*'))

gulp.task('scss', () =>
  gulp.src('./scss/style.scss')
  .pipe($.plumber())
  .pipe($.sass())
  .pipe($.autoprefixer())
  .pipe(gulp.dest('./dest'))
)

gulp.task('res',() => {
  gulp.src('./res/*')
    .pipe(gulp.dest('./dest'))
})

gulp.task('js',() => {
  gulp.src('./js/*')
    .pipe(gulp.dest('./dest'))
})

gulp.task('html',() => {
  gulp.src('./html/*')
    .pipe(gulp.dest('./dest'))
})

gulp.task('default', ['clean','scss','res','js','html'], () => {})

gulp.task('watch', ['default'], () => {
  gulp.watch('./scss/*',['scss'])
  gulp.watch('./res/*',['res'])
  gulp.watch('./js/*',['js'])
  gulp.watch('./html/*',['html'])
})
