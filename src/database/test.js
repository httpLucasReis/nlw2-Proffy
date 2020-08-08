const Database = require('./db');
const createProffy = require('./createProffy');

// Utilizando o await
Database.then(async (db)=> {
    
    proffyValue = {
        name: "Manoel Lucas",
        avatar: "https://avatars3.githubusercontent.com/u/62820717?s=460&u=5c24a49a96be390387f78faa019debcea5ee5113&v=4",
        whatsapp: "981601104",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20",
        // o prof id virá pelo banco de dados 
    }

    classScheduleValues = [
        // class_id virá pelo banco de dados, após cadastrarmos a class

        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        }, 

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    /*Inserindo dados */

    //await createProffy(db, {proffyValue, classValue, classScheduleValues});

    /*Pesquisando dados */
     //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");

    // Consultar as classes de um determinado proffy
    // e trazer junto os ados do professor

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id= 1;
    `);

    // O horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // O horário do time_from(8h) precisa ser menor ou igual ao horário solicitado
    // O time_to precisa está acima 

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.* 
        FROM class_schedule
        WHERE  class_schedule.class_id = 1
        AND class_schedule.weekday = 0
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "1200";
    `);

    console.log(selectClassesSchedules);

});

