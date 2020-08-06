// Procura botão
document.querySelector("#add-time").addEventListener('click', cloneField);

// Quando clicar no botão
// Executar um ação
function cloneField() {
    // Duplicar os campos
    // cloneNode -> copia até mesmo os filhos
    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true);

    //limpar os campos 

    const fields = newFieldsContainer.querySelectorAll("input");

    // Limpando cada field dos inputs
    fields.forEach(field => field.value = '');

    // Colocar na página
    document.querySelector("#schedule-items").appendChild(newFieldsContainer);
}


 
