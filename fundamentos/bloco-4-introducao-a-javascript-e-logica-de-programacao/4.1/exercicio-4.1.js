//Programa 1

function calculadora (a,operador,b){
    let resultado = null
    if (operador === "+"){
        resultado = a + b
    }else if (operador === "-"){
        resultado = a - b
    }else if (operador === "*"){
        resultado = a * b
    }else if (operador === "/"){
        resultado = a / b 
    }else if (operador === "%"){
        resultado = a % b
    
    }return typeof(resultado) === "number" ? resultado : console.log("Digite um operador válido!")

//console.log(calculadora(4,"*",2));
}


//Programa 2

function qualMaior (a,b){

    return a>b ? a : b

//console.log(qualMaior (11,12));
}


