const gulp         = require('gulp');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps   = require('gulp-sourcemaps');
const browserSync  = require('browser-sync').create();



gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
  	.pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream());
   
});

gulp.task('default', ['browser-sync']);




