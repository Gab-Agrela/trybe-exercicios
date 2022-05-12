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

//---------------------------------------------

//Programa 6
function xadrez (str){

    let string = str.toLowerCase()

    if (string === "peao"){
        return "Só pra frente"
    }else if (string === "torre"){
        return "Horizontal e Vertical"
    }else if (string === "cavalo"){
        return "Se move em formato de L. Pulando uma casa"
    }else if (string === "bispo"){
        return "Somente nas Diagonais"
    }else if (string === "rainha"){
        return "Qualquer Direção"
    }else if (string === "rei"){
        return "Qualquer Direção"
    }else {
        return "Digite sem acentos ou digite uma peça válida."
    }

}//console.log( xadrez ("peão"))

//---------------------------------------------

//Programa 7
function porcentagem(a){
    return a>=90 ? "A" : a>=80 ? "B" : a>=70 ? "C" : a>=60 ? "D" : a>= 50 ? "E" : "F"
}//console.log(porcentagem(65))

//---------------------------------------------

//Programa 8
function par (a,b,c){

    return (a+b+c)%2 === 0? true : false
}//console.log(par (2,1,1))

//---------------------------------------------

//Programa 9
function impar (a,b,c){

    return (a+b+c)%2 === 1? true : false
}//console.log(impar (1,1,1))

//---------------------------------------------

//Programa 10
function produto(custo,venda){
    let custoProduto = custo*1.2;
    let lucro = (venda - custoProduto)*1000

    return custo>0 ? venda>0 ? lucro : "Digite valores válidos" : "Digite valores válidos";
}//console.log(produto (300,600))

//---------------------------------------------

//Programa 11
function impostoRenda (a){
    let salario = 0
        if(a<=1556.94){
            salario = a * 0.92
        }else if (a<=2594.92){
            salario = a * 0.91
        }else if (a<=5189.82){
            salario = a * 0.89
        }else if (a>5189.82){
            salario = a - 570.88
        }
    let salarioDescontado = 0
        if (salario<=1903.98){
            salarioDescontado = salario 
        }else if (salario<=2826.65){
            salarioDescontado = (salario * 0.075)-142.80
        }else if (salario<=3751.05){
            salarioDescontado = (salario * 0.15)-354.8
        }else if (salario<=4664.68){
            salarioDescontado = (salario * 0.225)-636.13
        }else if (salario>4664.68){
            salarioDescontado = (salario * 0.275)-869.36
        }
    let salarioFinal = salario - salarioDescontado
    return salarioFinal
}console.log(impostoRenda(3000))














