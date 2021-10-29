const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	nombre: /^[a-zA-Z0-9\_\-]{1,16}$/, // Letras, numeros, guion y guion_bajo
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	celular: /^.{10,11}$/, // 11 a 11 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    nombre: false,
    apellido: false,
    celular: false,
    correo: false,
    contrasenia: false,
    confirm: false
};

const validarFormulario = (e) => {
    switch(e.target.name){
        case "nombre":
            validarCampoUno(expresiones.nombre, e.target, "nombre");
            validarCampoDos(expresiones.nombre,e.target,"#divNombre");
        break;
        case "apellido":
            validarCampoUno(expresiones.apellido, e.target, "apellido");
            validarCampoDos(expresiones.apellido,e.target,"#divApellido");
        break;
        case "celular":
            validarCampoUno(expresiones.celular, e.target, "celular");
            validarCampoDos(expresiones.celular,e.target,"#divCelular");
        break;
        case "correo":
            validarCampoUno(expresiones.correo, e.target, "correo");
            validarCampoDos(expresiones.correo,e.target,"#divCorreo");
        break;
        case "contrasenia":
            validarCampoUno(expresiones.contrasenia, e.target, "contrasenia");
            validarCampoDos(expresiones.contrasenia, e.target, "#divContrasenia");
        break;
        case "confirm":
            validarCampoUno(expresiones.confirm, e.target, "confirm");
            validarCampoDos(expresiones.confirm, e.target, "#divConfirm")
        break;
    }
};  

const validarCampoUno  = (expresion,input,campo) => {
    if(expresion.test(input.value)){
        document.getElementById(campo).classList.remove("formularioIncorrecto");
        document.getElementById(campo).classList.add("formularioCorrecto");
        campos[campo] = true;
    }else{
        document.getElementById(campo).classList.add("formularioIncorrecto");
        document.getElementById(campo).classList.remove("formularioCorrecto");
    }
};

const validarCampoDos = (expresion,input,campo) => {
    if(expresion.test(input.value)){
        campos[campo] = true;
        document.querySelector(`${campo} .mensajeError`).classList.remove("mensajeErrorActivo");
    }else{
        document.querySelector(`${campo} .mensajeError`).classList.add("mensajeErrorActivo");
    }
};

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario)
    input.addEventListener("blur", validarFormulario)
});


formulario.addEventListener("submit", () => {
    if(campos.nombre && campos.apellido && campos.celular && campos.correo && campos.contrasenia && campos.confirm){
        formulario.reset();
    }
});