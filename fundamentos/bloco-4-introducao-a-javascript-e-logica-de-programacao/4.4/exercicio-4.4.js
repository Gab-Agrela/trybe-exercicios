//Parte 1 

//Projeto 1
function e1(){
    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      };
      return console.log("Bem vinda "+info['personagem'])
}//e1()

//----------------------------------------------------------------------------------

//Projeto 2
function e2(){
    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      };
    info['recorrente'] = 'Sim'  
    return info
}//console.log(e2())

//-----------------------------------------------------------------------------------

//Projeto 3
function e3(){
    let obj = e2();
    for(let index in obj){
        console.log(index)
    }return
}//e3()

//-----------------------

//Projeto 4
function e4(){
    let obj = e2();
    for(let index in obj){
        console.log(obj[index])
    }
}//e4()

//------------------

//Projeto 5.1
function e51(){
    let info2 = {
        personagem: 'Tio Patinhas',
        origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
        nota: 'O último MacPatinhas',
        recorrente: 'Sim'
    }
return info2
}//console.log(e5())

function e52(){
    let obj1 = e2();
    let obj2 = e51();
    for(let i in obj1){
        if(i!=="recorrente"){
            console.log(obj1[i] + ' e ' + obj2[i])
        }else{console.log("Ambas recorrentes")}
    }
}//e52()

//------------------------------------------------------

//Programa 6
function e6(){
    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
          {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
          },
        ],
      };

      
      leitor['fullName'] = leitor['nome']+ ' ' + leitor['sobrenome'] 

    //console.log(' O livro favorito de ' + leitor['fullname'] + ' se chama ' + leitor['livrosFavoritos'][0]['titulo'])
return leitor
    
}//e6()

//-----------------

//Programa 7
function e7(){
    let obj = e6();
    obj.livrosFavoritos.push({
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      })
    return obj
    
}//console.log(e7())

//------------------------------------------------------------

//Programa 8
function e8(){
    let obj = e7();
    console.log(obj['nome'] + ' tem ' + obj['livrosFavoritos'].length + ' livros favoritos');
}//e8()

//----------------------

//Parte 2

//Programa 2.1
function e21(str){
    let newStr = str.split('').reverse().join('');
    return str===newStr ? true : false
}//console.log(e21('banana'))

//-------------------------------

//Programa 2.2
function e22(arr){
    return arr.reduce((r,d,i)=> d>r ? r=i : r=r , r=0)
}//console.log(e22([2, 3, 6, 7, 10, 1]))

//--------------------------------------------

//Programa 2.3
function e23(arr){
    return arr.reduce((r,d,i)=> d<r ? r=i : r=r , r=0)
}//console.log(e23([2, 4, 6, 7, 10, 0, -3]))

//-----------------------------------------------

//Programa 2.4
function e24(arr){
    return arr.reduce((r,d,i)=> d.length>r.length ? r=d : r=r , r= '')
}//console.log(e24(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

//------------------------------------------------------------------------------

//Programa 2.5
function e25(arr){
    let obj = arr.reduce((r,d,i)=> (r[d]=(r[d]||0)+1,r),{})
    return Object.entries(obj).reduce((r,d,i)=> d[1]> r[0] ? (r[0]=d[1] , r[1]=d[0]) : r=r, r= [0,0])

}//console.log(e25([2, 3, 2, 5, 8, 2, 3]))

//------------------------------------------

//Programa 2.6
function e26(n){
    let contador = 0
    for(let i = 0; i<=n; i+=1){
        contador= contador + i
    }return contador
}//console.log(e26(5))

//----------------------

//Programa 2.7
function e27(str1,str2){
    let test = ''
    for(let i=0 ; i<str1.length-(str2.length); i+=1){
        test = test + str1[i]
    }return test+str2 === str1 ? true : false
}//console.log(e27('joaofernando', 'do'))