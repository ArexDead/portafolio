function sendValuesFromForm() {
    let nombre, mensaje, email;
    nombre = document.getElementById('form_name').value;
    mensaje = document.getElementById('form_message').value;
    email = document.getElementById('form_email').value;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "arextrainer@gmail.com",
        Password : "",
        To : 'arextrainer@gmail.com',
        From : email,
        Subject : nombre,
        Body :  mensaje
    }).then(
      message => alert(message)
    );
}