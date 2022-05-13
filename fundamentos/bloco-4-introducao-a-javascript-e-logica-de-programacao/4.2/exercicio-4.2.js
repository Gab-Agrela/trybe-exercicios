let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Programa 1
function programa1(array){
    for(let a of array){
        console.log(a)
    }
}//console.log(programa1(array))

//--------------------------------------------------------------------

//Programa 2
function programa2(array){
    let contador = 0
    for(let i = 0; i<array.length; i+=1){
        contador = contador + array[i]
    }return contador
}//console.log(programa2(array))

//--------------------------------------------------------------------

//Programa 3 e 4
function programa3(array){
    let soma = programa2(array)
    let media = soma/array.length
    return media > 20 ? "valor maior que 20" : "valor menor que 20"
}//console.log(programa3(array))

//--------------------------------------------------------------------

//Programa 5
function programa5(array){
    let maior = 0
    for(let i=0; i<array.length; i+=1){
        if(array[i]>array[i+1] && array[i]>maior){
            maior = array[i]
        }
    }return maior
}//console.log(programa5(array))

//--------------------------------------------------------------------

//Programa 6
function programa6(array){
    let contador = 0
    let impar = []
    for(let i = 0; i<array.length; i+=1){
        if(array[i]%2===1){
            contador+=1
            impar.push(array[i])
        }
    }return contador>0 ? impar : "Nenhum valor ímpar"
}//console.log(programa6(array))

//--------------------------------------------------------------------

//Programa 7
function programa7(array){
    let menor = 100000
    for(let i=0; i<array.length; i+=1){
        if(array[i]<array[i+1] && array[i]<menor){
            menor = array[i]
        }
    }return menor
}//console.log(programa7(array))