function alertForm(e) {
    e.preventDefault();
    const title = document.getElementById('title-sugerencia').value.trim();
    const text = document.getElementById('message').value.trim();

    const modalTitle = document.getElementById('modalMessageLabel');
    const modalBody = document.getElementById('modalMessageBody');

    if (title === "" || text === "") {
        modalTitle.textContent = "¡Error!";
        modalBody.textContent = "Debes ingresar toda la información requerida";
    }else{
        modalTitle.textContent = "¡Éxito!";
        modalBody.textContent = "Tu sugerencia se ha enviado correctamente";
    }
    const modal =  new bootstrap.Modal(document.getElementById('staticBackdrop'));
    modal.show();
}