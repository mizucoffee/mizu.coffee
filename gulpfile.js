const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const rimraf = require("rimraf");
const sass = require("gulp-sass")(require("sass"));

function clean(done) {
  rimraf("dest", [], done);
}

function res(dir) {
  return () =>
    gulp
      .src([`./${dir}/html/*`, `./${dir}/js/*`, `./${dir}/res/*`])
      .pipe(gulp.dest(`./dest/${dir == "latest" ? "" : dir}`));
}

function scss(dir) {
  return () =>
    gulp
      .src(`./${dir}/scss/style.scss`, { allowEmpty: true })
      .pipe($.plumber())
      .pipe(sass())
      .pipe($.autoprefixer())
      .pipe(gulp.dest(`./dest/${dir == "latest" ? "" : dir}`));
}

exports.default = gulp.series(
  ...["latest", "v1", "v2", "v3"].map((v) => [res(v), scss(v)])
);
