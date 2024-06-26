function showDiv(divId) {
    // Ocultar todos los divs de contenido
    const divs = document.querySelectorAll('.content_div');
    divs.forEach(div => {
        div.style.display = 'none';
    });

    // Mostrar el div seleccionado
    const selectedDiv = document.getElementById(divId);
    selectedDiv.style.display = 'block';
}

function closeDiv(divId) {
    // Ocultar el div seleccionado
    const selectedDiv = document.getElementById(divId);
    selectedDiv.style.display = 'none';
}