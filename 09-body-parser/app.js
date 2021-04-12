// Express
var express = require('express');

// BoryParser
var bodyParser = require('body-parser');

// App
var app = express();

// Configurar o bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// Rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/formulario.html');
});

app.post('/receber', function(req, res ){
    res.write('Nome Informado: ' + req.body.nome);
    res.end();
});

// Starar o Servidor
app.listen(8080);