var gulp = require("gulp"),
  sass = require("gulp-sass"),
  plumber = require("gulp-plumber"),
  browserSync = require("browser-sync").create(),
  reload = browserSync.reload,
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename");

// Sass --------------------------------------------
gulp.task("sass", function() {
  gulp
    .src("./css/style.scss")
    .pipe(
      plumber({
        handleError: function(err) {
          console.log(err);
          this.emit("end");
        }
      })
    )
    .pipe(sass())
    //.pipe(sass({outputStyle: 'compressed'})) // Minifica o arquivo CSS
    .pipe(gulp.dest("./"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

// Server --------------------------------------------
gulp.task("browserSync", function() {
  //watch files
  var files = ["./style.css", "./*.php", "./*.js"];

  //initialize browsersync
  browserSync.init(files, {
    //browsersync with a php server
    proxy: "localhost/",
    notify: false
  });
});

// Concat > Compress --------------------------------------------
gulp.task("contat-libs", function() {
  // Concat
  gulp
    .src([
      "./js/scripts.js",
      "./libs/bootstrap-sass/assets/javascripts/bootstrap.min.js",
      "./libs/jquery/dist/jquery.min.js"
    ])
    .pipe(concat("main.js"))
    .pipe(gulp.dest("./js/"));
});
gulp.task("compress-libs", function() {
  // Compress
  gulp
    .src("js/main.js")
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./js/"));
});

// GULP TASKS --------------------------------------------

// Gulp Default
gulp.task("watch", ["browserSync", "sass"], function() {
  gulp.watch("./**/*.scss", ["sass"]);
  console.log("Success!");
});
// Gulp Sass
gulp.task("default", ["sass", "contat-libs", "compress-libs"], function() {
  console.log("Success!");
});
