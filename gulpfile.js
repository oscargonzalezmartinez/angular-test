var gulp = require('gulp');
//var sass = require('gulp-sass');
var lr = require('gulp-livereload');


function startLivereload() {
	lr.listen(35729);
}

function startExpress() {
	var express = require('express');
	var app = express();
	app.use(require('connect-livereload')());
	app.use(express.static(__dirname)); // __dirname significa el directorio en el que estoy
	app.listen(80);
}

function notifyLivereload() {
	lr.reload();
}

// tarea de hola mundo
gulp.task("default", function() {
	startExpress();
	startLivereload();
	gulp.watch('**/*', notifyLivereload);
//	gulp.watch('sass/**/*.scss',['styles']);
});


//gulp.task('styles', function() {
//    gulp.src('sass/**/*.scss')
//        .pipe(sass().on('error', sass.logError))
//        .pipe(gulp.dest('./css/'));
//});

// tarea de hola mundo
gulp.task("Inicio", function() {
	console.log("Iniciando script de gulp");
});

// dependencia del inicio
gulp.task("DimeNombre", ["Inicio"], function(nombre) {
	console.log("Tu nombre es: " + nombre);
});
