// Criando um Servidor

// Importando o módulo http
let http = require('http');

// Criar o Servidor req - Recebe | res - retorna
http.createServer(function(req, res){
  
    res.write("Aprendendo Node.js");
    res.end();

}).listen(8080);
