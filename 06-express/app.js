// Importar o Express
let express = require('express');

// Criando variavel para ter acesso as funcionalidades
let app = express();

//Rota mostra os detalhes do servidor
app.get('/', function(req, res){

    res.write('Servidor com o Express');
    res.end();

})

app.listen(8080);
