// schedules salvos 
let schedulesSaved = [];

// Procura botão
document.querySelector("#add-time").addEventListener('click', cloneField);

// Quando clicar no botão
// Executar um ação
function cloneField() {
    // Duplicar os campos
    // cloneNode -> copia até mesmo os filhos
    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true);

    console.log(newFieldsContainer);

    // Pegar o botão delete
    const deleteButton = newFieldsContainer.querySelector(".delete-button")

    // o total de botões adicionados -> o novo index de um schedule é igual a total de schedules adicionados
    const totalSchedules = document.querySelectorAll("#schedule-items .schedule-item+.schedule-item").length;

    // Limpando schedules salvos -> caso o usuário tenha apagado todos os schedules
    if( totalSchedules == 0){
        schedulesSaved = schedulesSaved.slice(0,schedulesSaved-1);
    }
    
    // Adicionando a função remove 
    deleteButton.setAttribute('onclick','removeItem('+(totalSchedules)+')');

    // Torna-lo visível 
    deleteButton.classList.toggle("active");

    //limpar os campos 
    const fields = newFieldsContainer.querySelectorAll("input");

    // Limpando cada field dos inputs
    fields.forEach((field) => {
        field.value = '';
    });

    // Colocar na página
    document.querySelector("#schedule-items").appendChild(newFieldsContainer);

    schedulesSaved.push(newFieldsContainer);
}

function removeItem(index){
    "use strict";
    // Pegando todos os index
     const schedule = schedulesSaved[index]

     console.log(schedule)

    // Removendo o schedule que corresponde ao index passado como parâmetro
    schedule.parentNode.removeChild(schedule);

}

 
