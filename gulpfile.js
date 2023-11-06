const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"))

var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

function scss(){
    return gulp.src("./app/sass/**/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("./app/css"))
}
exports.scss = scss;

function scsswatch(){
    gulp.watch("./app/sass/**/*.scss",scss)
}
exports.scsswatch = scsswatch;

gulp.task('deploy', function () {
    return gulp.src("./dist/**/*")
      .pipe(deploy())
  });