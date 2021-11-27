var boton = document.getElementById("boton");

boton.addEventListener('click', Verificar);

function Verificar(event) {
    var count = 0;

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
    var AvisoDePrivacidad = document.getElementById("terminos").checked;

    var ExNombre = /^[a-zA-ZÁ-ÿ\s]{1,40}$/;
    var ExCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;


    if (nombre != "") { 
        if (!ExNombre.test(nombre)) {
            alert("El campo 'Nombre' solo acepta letras.");
            count++;
        }
    }
    else {
        alert("Favor de llenar el campo 'Nombre'");
        count++;
    }

    if (correo != "") {
        if (!ExCorreo.test(correo)) {
            alert("El correo no sigue el formato. Ejemplo: jhon@email.com");
            count++;
        }            
    }
    else {
        alert("Favor de llenar el campo 'Correo'");
        count++;
    }

    if (mensaje == "") {
        alert("Favor de proporcionar un mensaje.");
        count++;
    }

    if (AvisoDePrivacidad == false) {
        alert("Favor de leer y aceptar nuestros Terminos y Condiciones");
        count++;
    }

    if (count > 0){
        event.preventDefault();
    }
    else{
        alert("Responderemos a su correo lo mas pronto posible.");
        formumario.reset();
    }
    
    

}
