// inportar o express
let express = require('express');
//App
let app = express();

// Rotas caminho das páginas HTML
app.get('/', function(req, res){

    res.sendFile(__dirname + '/pages/index.html');

});

// servidor
app.listen(8080);

//nodemon app.js

