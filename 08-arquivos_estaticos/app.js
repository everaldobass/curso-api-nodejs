// inportar o express
let express = require('express');
//App
let app = express();


// Aulo 08 - Especificar local do CSS e Imagens
app.use(express.static(__dirname + '/publico'));



// Rotas das páginas em HTML
app.get('/', function(req, res){

    res.sendFile(__dirname + '/pages/index.html');

});



// Verificar a porta do servidor
app.listen(8080);

//nodemon app.js

