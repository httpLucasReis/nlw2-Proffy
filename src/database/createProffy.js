// Para utilizar o await a função precisa ser assíncrona 
module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
    // inserir dados na tabela de teachers

    // Aguarda o resultado da promise para continuar a execução

    /* Inserindo dados na tabela de proffys */ 
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            '${proffyValue.bio}'
        );
    `)
    
   
    const proffyId = insertedProffy.lastID; // pegado o ID da tabela proffys

    //Inserir dados na tabela classes
    
    /* Inserindo dados na tabela de classes */ 

    console.log(classValue.cost);

    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffyId}"
        );
    `)
    
    const class_id = insertedClass.lastID;
    
    /* Mapeando o array classScheduleValues */
    // Ele pega cada objeto do array e prepara um db.run para todos

    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue)=> {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    });

    /* Executando todos os db.runs da class schedules*/
    // Todas as promises irão ser executadas
    await Promise.all(insertedAllClassScheduleValues)
    
}