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