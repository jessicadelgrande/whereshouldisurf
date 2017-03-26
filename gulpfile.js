const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const autoPrefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('styles',() => {
	return gulp.src('styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoPrefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('styles/'))
		.pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
	return gulp.src('scripts/main.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('scripts/'))
		.pipe(reload({stream: true}));
});

gulp.task('browser-sync', () => {
	browserSync.init({
		server: '.'   
	})
});

gulp.task('watch', () => {
	gulp.watch('styles/**/*.scss', ['styles']); 
	gulp.watch('scripts/script.js', ['scripts']);
	gulp.watch('index.html', reload);
});

gulp.task('default', ['browser-sync','scripts','styles','watch']);