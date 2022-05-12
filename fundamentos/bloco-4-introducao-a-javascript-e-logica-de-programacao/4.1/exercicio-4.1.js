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
}//console.log(calculadora(4,"*",2));

//---------------------------------------------

//Programa 2
function qualMaior (a,b){

    return a>b ? a : b
}//console.log(qualMaior (11,12));

//---------------------------------------------

//Programa 3
function qualMaior2 (a,b,c){

    let maior = a>b ? a :b;
    
    return maior>c ? maior : c
}//console.log(qualMaior2 (1,4,3));

//---------------------------------------------

//Programa 4
function positivo(a){
    return a>0 ? "Positivo" : "Negativo"
}//console.log(positivo(3));

//---------------------------------------------

//Programa 5
function triangulo(a,b,c){

    return a>0 ? b>0 ? c>0 ? ((a+b+c) === 180 ? true : false) : "Digite angulos positivos" :"Digite angulos positivos":"Digite angulos positivos"
}//console.log(triangulo (60,60,60))