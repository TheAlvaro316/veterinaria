var boton = document.getElementById("boton");

boton.addEventListener('click',Verificar);

function Verificar(event){
    var nombre=document.getElementById("nombre").value;
    var correo=document.getElementById("correo").value;
    var mensaje=document.getElementById("mensaje").value;
    var AvisoDePrivacidad=document.getElementById("ChekAviso").checked;

    if(nombre ==""|| correo==""|| mensaje ==""|| AvisoDePrivacidad==false){
        event.preventDefault();
        if(nombre!=""){
            var nombre = document.getElementById("nombre").value;
            var ExNombre = /^[a-zA-ZA-y\s]{1,40}$/;
            console.log(ExNombre.test(nombre));
            if (ExNombre.test(nombre) == true) {

            }
            else {
                alert("Solo acepto letras");
            }
        }else{
            alert("Fabor de llenar el nombre");
        }
        if(correo!=""){
            var Correo = document.getElementById("correo").value;
            var ExCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            if (ExCorreo.test(Correo) == true) {

            }
            else {
                alert("El correo Esta mal Ejemplo jhon@email.com");
            }
        }else{
            alert("Fabor de llenar el Correo");
        }
        if(mensaje==""){
           alert("No tiene contenido");
        }
        if(AvisoDePrivacidad==false){
            alert("Fabor de leer los Avisos de privacidad");
        }
    }else{
        alert("A llenado el a sido correcto su correo sera respondido lo mas pronto posible");
    }
    

}
