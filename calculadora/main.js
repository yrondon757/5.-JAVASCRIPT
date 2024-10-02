let valueDisplay = "";
let currentOperator = null;
let previousValue = null;

// VAMOS A ACTUALIZAR EL VALOR QUE SE MUESTRA POR PANTALLA
function updateDisplay() {
  document.getElementById("display").value = valueDisplay || "0";
}

// Vamos a agregar numero o punto al valor que se muestra
function addNumber(number){
  valueDisplay += number;
  updateDisplay();
}

// Vamos a agregar un operador que se seleccione
function addOperator(operator){
    if(previousValue === null){
        previousValue = parseFloat(valueDisplay);
    }else{
        // Aqui llamamos a la funcion para calcular
    }
    currentOperator = operator
    valueDisplay = "" // Reiniciamos el valr de la pantalla cuando hagamos la operacion
}

// Vamos a crear una funcion para crear los calculos, segun sean el operador
function calculate(){
    if(currentOperator === null || previousValue === null) return;
    const currentValue = parseFloat(valueDisplay);
  
    if(currentOperator === "+"){
      previousValue += currentValue
    }else if(currentOperator === "-"){
      previousValue -= currentValue;
    }else if(currentOperator === "*"){
      previousValue *= currentValue;
    } else if(currentOperator === "/"){
      previousValue = currentValue !== 0 ? previousValue / currentValue : "No se puede dividir entre 0";
    }
  
    valueDisplay = previousValue.toString();
    currentOperator = null;
    updateDisplay();
  };

  // Vamos a crear una funcion para limpiar la pantalla
  function clearDisplay(){
    valueDisplay = "";
    previousValue = null;
    currentOperator = null;
    updateDisplay();
  }

  // Funcion eval();
  console.log(eval("50 + 2 * 10 / 2")); // Resuelve operaciones matematicas en string (con ""). Ejem: 5+5+5-2/2*2