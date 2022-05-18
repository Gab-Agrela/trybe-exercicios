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

//-----------------------------------------

//Programa Bonus 1
function bonus1(str){
    let obj = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000 };
    let primeiro = obj[str[0].toUpperCase()];
     if(str.length<=3){
        if(str.length === 1){
            return primeiro
        }else if(str.length===2){
            let segundo = obj[str[1].toUpperCase()];
            if(primeiro<segundo){
                return segundo-primeiro
            }else if(primeiro>=segundo){
                return segundo+primeiro
            }
        }else if(str.length===3){
            let segundo = obj[str[1].toUpperCase()];
            let terceiro = obj[str[2].toUpperCase()];
            if(primeiro<=segundo && segundo<terceiro){
                return terceiro - segundo - primeiro
            }else if(primeiro<segundo && segundo>=terceiro){
                return terceiro + segundo - primeiro
            }else if (primeiro===segundo && segundo===terceiro){
                return primeiro+segundo+terceiro
            }
        }
    }
}//console.log(bonus1('XCL'))

//------------------------------

//Programa Bonus 2
function bonus2(vetor){
    let par = [];
    for(let i = 0; i<vetor.length;i+=1){
        par.push(vetor[i].filter(d=>d%2===0 ? true : false));
    }
    let vetor2 = par.join(',').split(',');
    return vetor2.map(d=>parseInt(d))
}//console.log(bonus2([[1, 2], [3,4,5,6], [7,8,9,10]]))

//-----------------------------------------------------------

//Programa Bonus 3
function bonus3(){
    const basket = [
        'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
        'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
        'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
        'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
        'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
        'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
        'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
        'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
        'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
        'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
        'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
        'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
        'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
        'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
        'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
        'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
        'Banana', 'Pera', 'Abacate', 'Uva',
      ];
    let cesta = basket.reduce((r,d)=> (r[d]=(r[d]||0)+1,r),{});
    console.log("Sua cesta possui: ");
    for(let i in cesta){
        console.log(cesta[i] + " : " + i + "s")
    }
}//bonus3()

//--------------------

//Programa Bonus 4
function bonus4(){
    let moradores = {
        blocoUm: [
          {
            nome: 'Luiza',
            sobrenome: 'Guimarães',
            andar: 10,
            apartamento: 1005,
          },
          {
            nome: 'William',
            sobrenome: 'Albuquerque',
            andar: 5,
            apartamento: 502,
          },
        ],
        blocoDois: [
          {
            nome: 'Murilo',
            sobrenome: 'Ferraz',
            andar: 8,
            apartamento: 804,
          },
          {
            nome: 'Zoey',
            sobrenome: 'Brooks',
            andar: 1,
            apartamento: 101,
          },
        ],
    };
    return console.log("O morador do bloco 2 de nome " + moradores['blocoDois'][1]['nome'] + " " + moradores['blocoDois'][1]['sobrenome'] + " mora no " + moradores['blocoDois'][1]['andar'] + "º andar, apartamento " + moradores['blocoDois'][1]['apartamento'] )

}//bonus4()

//-----------------------

//Programa Bonus 5
function bonus5(){
    let moradores = {
        blocoUm: [
          {
            nome: 'Luiza',
            sobrenome: 'Guimarães',
            andar: 10,
            apartamento: 1005,
          },
          {
            nome: 'William',
            sobrenome: 'Albuquerque',
            andar: 5,
            apartamento: 502,
          },
        ],
        blocoDois: [
          {
            nome: 'Murilo',
            sobrenome: 'Ferraz',
            andar: 8,
            apartamento: 804,
          },
          {
            nome: 'Zoey',
            sobrenome: 'Brooks',
            andar: 1,
            apartamento: 101,
          },
        ],
    };

    for(let i=0;i<moradores['blocoUm'].length;i+=1){
        console.log(moradores['blocoUm'][i]['nome'] + " " + moradores['blocoUm'][i]['sobrenome'])
    }
    for(let i=0;i<moradores['blocoDois'].length;i+=1){
        console.log(moradores['blocoDois'][i]['nome'] + " " + moradores['blocoDois'][i]['sobrenome'])
    }
}//bonus5()