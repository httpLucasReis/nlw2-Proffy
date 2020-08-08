const express = require('express');
const server = express();
const nunjucks = require("nunjucks");
const { pageLanding, pageStudy, pageGiveClasses, saveClasses}  = require('./pages'); // desestruturar

//Configura o template engine 
nunjucks.configure('src/views/', {
    express: server,
    noCache: true
})

//Receber os dados do req.body

server.use(express.urlencoded({ extended: true }));

// Configurando os arquivos estáticos 
server.use(express.static("public"));

// Rotas da aplicação 

server.get("/", pageLanding);

server.get("/study", pageStudy);

server.get("/give-classes", pageGiveClasses);

server.post("/save-classes", saveClasses);

// Porta do servidor 
server.listen(8080);