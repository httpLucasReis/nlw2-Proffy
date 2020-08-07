const proffys = [{
        name: "Manoel Lucas",
        avatar: "https://avatars3.githubusercontent.com/u/62820717?s=460&u=5c24a49a96be390387f78faa019debcea5ee5113&v=4",
        whatsapp: "981601104",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },

    {
        name: "Roberto Carlos",
        avatar: "https://avatars3.githubusercontent.com/u/62820717?s=460&u=5c24a49a96be390387f78faa019debcea5ee5113&v=4",
        whatsapp: "981601104",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },

    {
        name: "Roberto Carlos",
        avatar: "https://avatars1.githubusercontent.com/u/56794256?s=460&u=cc4074d94b0a3e3b625cd03e3260972fa633cd9e&v=4",
        whatsapp: "981601104",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
];

const subjects = [
    "Artes",
    "Biologia ",
    "Ciências ",
    "Educação física ",
    "Física ",
    "Geografia ",
    "História ",
    "Matemática ",
    "Português" ,
    "Química ",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

const express = require('express');
const server = express();
const nunjucks = require("nunjucks");

//Configura o template engine 
nunjucks.configure('src/views/', {
    express: server,
    noCache: true
})

// Configurando os arquivos estáticos 
server.use(express.static("public"));

/* Funcionalidades da aplicação  */
function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1;
    return subjects[arrayPosition];
}

function pageLanding(req, res) {
    // sendFile -> apenas o node, __dir -> diretório do servidor
    // render -> nunjucks. O diretório já foi configurado. Com ele é possível enviar dados do backend para o front

    return res.render("index.html");
}

function pageStudy(req, res) {
    const filters = req.query;
    console.log(filters);
    return res.render("study.html", {
        proffys,
        filters,
        subjects,
        weekdays
    });
}

function pageGiveClasses(req, res) {
    const data = req.query;
    const isNotEmpty = Object.keys(data).length != 0;

    if(isNotEmpty){
        data.subject = getSubject(data.subject);
        proffys.push(data);
        return res.redirect("study"); // Redirecionar o usuário para página study
    } 

    return res.render("give-classes.html", {weekdays,subjects})
}

/* FIM - Funcionalidades da aplicação  */

server.get("/", pageLanding);

server.get("/study", pageStudy);

server.get("/give-classes", pageGiveClasses);

// Porta do servidor 
server.listen(3000);