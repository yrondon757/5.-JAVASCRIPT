const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const errorEmail = document.getElementById("emailError");
const errorPassword = document.getElementById("passwordError");

// VAMOS A CREAR LAS EXPRESIONES REGULARES

const regexEmail = /\w+\@\w{3,7}\.com/g;

inputEmail.addEventListener("input", () =>{
    if(regexEmail.test(inputEmail.value)){
        alert("Valido")
    }else{
        alert("Invalido")
    }
})