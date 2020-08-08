const database = require('sqlite-async');

function execute(db){
  //exec -> executa comandos em sql
  return db.exec(`
    CREATE TABLE IF NOT EXISTS proffys (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        whatsapp TEXT,
        bio TEXT
    );

    CREATE TABLE IF NOT EXISTS classes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        subject INTEGER,
        cost TEXT,
        proffy_id INTEGER 
    );

    CREATE TABLE IF NOT EXISTS class_schedule (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        weekday INTEGER,
        time_from INTEGER,
        time_to INTEGER,
        class_id INTEGER
    );

 `)
}

// Criando um banco de dados
// Utilizando uma promise para evitar erros
// Permite fazer um require
module.exports = database.open(__dirname + "/database.sqlite").then(execute);