var gulp = require('gulp');
//var sass = require('gulp-sass');
var lr = require('gulp-livereload');
var cors = require('cors');
var bodyParser = require('body-parser');
	var autores = [
{id:0,nombre:'Pepe',autor:'A1',especialidad:'G1',precio:10,stock:3,descripcion:'Especialidad 1'},
{id:1,nombre:'Juan',autor:'A2',especialidad:'G1',precio:10,stock:2,descripcion:'Especialidad 2'},
{id:2,nombre:'Lucy',autor:'A3',especialidad:'G3',precio:10,stock:1,descripcion:'Especialidad 3'}
	
];
function startLivereload() {
	lr.listen(35729);
}

function startExpress() {
	var express = require('express');
	var app = express();
	app.use(require('connect-livereload')());
	app.use(express.static(__dirname)); // __dirname significa el directorio en el que estoy
	
	app.use(cors()),
	app.use(bodyParser.json());

	app.listen(80);
	
	app.post("/api/login", function(req, res) {
		 console.log(new Date() + " login " +  req.body);
		 console.log(new Date() + " login " +  req.body.id);
		//console.log("Petición Recibida:"+new Date());

		res.send({"id":"u","password":"u","ok":true});
	});

	app.post("/api/search", function(req, res) {
		 console.log(new Date() + " search " +  req.body);
		//res.sendFile(req.params.fichero,{root:'./'});
		res.send(autores);
	});

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
