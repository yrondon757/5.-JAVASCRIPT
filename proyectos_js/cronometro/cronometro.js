let temporizador = document.getElementById ('temporizador');
let iniciar = document.getElementById('start_stop');
let resetear = document.getElementById('reset');
let vuelta = document.getElementById('lap');
let grabar = document.getElementById('vueltasGrabadas');

let tiempo = 0, intervalo = 0;
let verificador = false;

init()

function init(){
    iniciar.addEventListener('click', iniciarContador);
    resetear.addEventListener('click', resetearContador);
    vuelta.addEventListener('click', vueltaContador);
}

function iniciarContador(){
    if(verificador == false){
        intervalo = setInterval(function(){
            tiempo += 0.01;
            temporizador.innerHTML = tiempo.toFixed(2);
        }, 10);
        verificador = true;
    }else{
        verificador = false;
        clearInterval(intervalo);

    }
}

function resetearContador(){
    verificador = false;
    tiempo = 0;
    temporizador.innerHTML = tiempo + '.00';
    clearInterval(intervalo);
    while(vueltasGrabadas.firstChild){
        vueltasGrabadas.removeChild(vueltasGrabadas.firstChild);
    }
}

function vueltaContador(){
    if(temporizador.textContent === '0.00'){
        alert('Debes dar click en Iniciar');
    }else{
        let p = document.createElement('ul');
    p.innerHTML = `
        <li>Tiempo : ${tiempo.toFixed(2)}</li>
    `;
    grabar.appendChild(p);
    }
}