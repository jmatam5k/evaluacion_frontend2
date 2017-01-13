var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var image = require('gulp-imagemin');


gulp.task('script', function(){
	//tarea
	gulp.src('src/js/custom.js')
	//unirlo
	.pipe(concat('script.min.js'))
	//minificarlo
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));//para dejarlo en esa carpeta
});

gulp.task('style', function(){
	//aqui va la tarea
	gulp.src('src/sass/main.scss')//transformar los sass
	.pipe(sass().on('error', sass.logError))//para que avise errores mas explicitos
	//minimizarlo
	.pipe(minifyCSS())
	//dejar en archivo de destino
	.pipe(concat('main.min.css'))
	//dejar en carpeta
	.pipe(gulp.dest('dist/css'))

});
gulp.task('image', function() {
     gulp.src('docs/**/*.{jpg,jpeg,gif,png,svg}')
   .pipe(gulp.dest('dist/img'));// tarea images
});

gulp.task('fonts', function(){
	gulp.src('src/fonts/*')//toma todo lo que esta dentro
	.pipe(gulp.dest('dist/fonts'));//deja todo lo que tome
});

gulp.task('default',['script','style', 'fonts', 'image']);

gulp.task('watch', function (){
	gulp.watch('src/js/*.js', function(){
	});
});	