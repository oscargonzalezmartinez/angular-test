var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
//var multer = require('multer'); // v1.0.5
//var upload = multer(); // for parsing multipart/form-data

var port = 9000;
var app = express();

	var autores = [
{id:0,nombre:'Pepe',autor:'A1',especialidad:'G1',precio:10,stock:3,descripcion:'Especialidad 1'},
{id:1,nombre:'Juan',autor:'A2',especialidad:'G1',precio:10,stock:2,descripcion:'Especialidad 2'},
{id:2,nombre:'Lucy',autor:'A3',especialidad:'G3',precio:10,stock:1,descripcion:'Especialidad 3'}
	
];

// Pone por defecto origin="*" y methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' para permitir accesos
app.use(cors()),
app.use(bodyParser.json()); // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/api/list", function(req, res) {
	
	console.log("Petición Recibida:"+new Date());

	res.send(autores);
});

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

app.get("/api/get/:id", function(req, res) {
	console.log(req.params.id + " Petición Recibida:"+new Date());
	//res.sendFile(req.params.fichero,{root:'./'});
	res.send(autores[req.params.id]);
});

app.get("/api/buy/:id", function(req, res) {
	console.log("buy " + req.params.id + " Petición Recibida:"+new Date());
	//autores.splice(req.params.id,1);
	var id = req.params.id;
	var stock = autores[id].stock - 1;
	autores[id].stock = stock;
//	if (stock==0){
		//autores.splice(id,1);
	//}
	res.send(autores[id]);
});

app.listen(port,function(err, res) {
	if(err) throw err;
});