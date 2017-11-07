var gulp = require('gulp'),
sass = require('gulp-sass'),
plumber = require('gulp-plumber'),
browserSync = require('browser-sync').create(),
reload = browserSync.reload,
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
rename = require("gulp-rename");

// Sass --------------------------------------------
gulp.task('sass', function() {
    gulp.src('./css/style.scss')
      .pipe(plumber({
        handleError: function (err) {
          console.log(err)
          this.emit('end')
        }
      }))
      .pipe(sass())
      //.pipe(sass({outputStyle: 'compressed'})) // Minifica o arquivo CSS
      .pipe(gulp.dest('./'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

// Server --------------------------------------------
gulp.task('browserSync', function() {
    //watch files
    var files = [
    './style.css',
    './*.php',
    './*.js'
    ];

    //initialize browsersync
    browserSync.init(files, {
    //browsersync with a php server
    proxy: "localhost/wordpress/",
    notify: false
    });
});

// Copy > Concat > Compress --------------------------------------------
gulp.task('copy-libs', function () { // Copy
    gulp.src(['./libs/bootstrap-sass/assets/javascripts/bootstrap.min.js', './libs/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('./js/lib/'));
});
gulp.task('contat-libs', function() { // Concat
    return gulp.src('./js/lib/*.js')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./js/'));
});
gulp.task('compress-libs', function () { // Compress
    gulp.src(['js/all.js', 'js/scripts.js'])
      .pipe(uglify())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('js'))
})

// GULP TASKS --------------------------------------------

// Gulp Default
gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('./**/*.scss', ['sass']);
    console.log( 'Success!' );
})
// Gulp Sass
gulp.task('default', ['sass', 'copy-libs', 'contat-libs', 'compress-libs'], function() {
    console.log( 'Success!' );
});