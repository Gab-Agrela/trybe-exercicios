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

//--------------------------------------------------------------------

//Programa 8
function programa8([]){
    let numeros = []
    for(let i = 1; i<26;i+=1){
        numeros.push(i)
    }return numeros
}//console.log(programa8([]))

//--------------------------------------------------------------------

//Programa 9 
function programa9([]){
    let numeros = programa8([]);
    let divisao = [];
    for(let i=0; i<numeros.length;i+=1){
        divisao.push(numeros[i]/2)
    }return divisao
}//console.log(programa9([]))

//--------------------------------------------------------------------

//Programa Bonus 1
function programaBonus1(array){
    let sort = array.sort((a,b)=>a-b)
    return sort
}//console.log(programaBonus1(array))

//--------------------------------------------------------------------

//Programa Bonus 2
function programaBonus2(array){
    let sort = array.sort((a,b)=>b-a)
    return sort
}//console.log(programaBonus2(array))

//--------------------------------------------------------------------

//Programa Bonus 3
function programaBonus3(array){
    let newArray = [];
    for(let i = 0;i<array.length;i+=1){
        if(array[i+1]>0){
            newArray.push(array[i]*array[i+1])
        }else{
            newArray.push(array[i]*2)
        }
    }return newArray
}//console.log(programaBonus3(array))