const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const errorEmail = document.getElementById("emailError");
const errorPassword = document.getElementById("passwordError");

// VAMOS A CREAR LAS EXPRESIONES REGULARES

const regexEmail = /\w+\@\w{3,7}\.com/;
const regexPassword = /\w+/;

// VALIDACION EN TIEMPO DE REAL DEL CORREO ELECTRONICO
inputEmail.addEventListener("input", ()=>{
  if(regexEmail.test(inputEmail.value)){
    inputEmail.classList.remove("invalid");
    errorEmail.style.display = "none";
    inputEmail.classList.add("valid")
  }else{
    inputEmail.classList.remove("valid");
    errorEmail.style.display = "block";
    inputEmail.classList.add("invalid")
  }
})

// VALIDACION EN TIEMPO REAL DE LA CONTRASENA
inputPassword.addEventListener("input", ()=>{
    if(regexPassword.test(inputPassword.value)){
      inputPassword.classList.remove("invalid");
      errorPassword.style.display = "none";
      inputPassword.classList.add("valid")
    }else{
      inputPassword.classList.remove("valid");
      errorPassword.style.display = "block";
      inputPassword.classList.add("invalid")
    }
  })

// VALIDAR ANTES DE ENVIAR EL FORMULARIO
document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault();
    if(!regexEmail.test(inputEmail.value) || !regexPassword.test(inputPassword.value)){
        alert("Por favor, rellene los campos correctamente");
    }
    alert(("Formulario enviado"));
})