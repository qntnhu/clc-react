var gulp = require("gulp");
var browserify = require("gulp-browserify");
var concat = require("gulp-concat");
var imagemin = require("gulp-imagemin");

gulp.task("styles", function() {
  gulp.src(["assets/css/styles.css"])
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("./build/"));
});

gulp.task("scripts", function() {
  gulp.src(["assets/js/app.js"])
    .pipe(browserify({
      debug: true,
      transform: ["reactify"]
    }))
    .pipe(gulp.dest("build/"));
});

gulp.task("images", function() {
  gulp.src(["assets/images/**/*.{png,jpg,gif}"])
    .pipe(imagemin())
    .pipe(gulp.dest("build/images/"));
});

gulp.task("dev", ["build"], function() {
  gulp.watch("assets/js/**/*.js", ["scripts"]);
  gulp.watch("assets/css/**/*.css", ["styles"]);
  gulp.watch("assets/images/**/*", ["images"]);
});

gulp.task("build", ["styles", "scripts", "images"]);
