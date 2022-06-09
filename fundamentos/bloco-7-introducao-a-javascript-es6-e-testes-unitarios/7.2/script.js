//Parte I

 const testingScope =  (escopo) => escopo === true ? console.log(`Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`) :  console.log(`Não devo ser utilizada fora meu escopo (else)`);

 //testingScope(false)
//------------------------------
 const oddsAndEvens = [13, 3, 4, 10, 7, 2];

 oddsAndEvens.sort((a,b)=>a-b)

//console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`)

//---------------------------------

//Parte II

const fatorial = (num) => {
    let sum = num;
    for (let i = num-1 ; i>0; i -= 1){
        sum = sum * i; 
    } return (sum > 0) ? sum : 1 
}

//console.log(fatorial(3))

//Opção 2

const fatorial1 = (n) => n ? n* fatorial1(n-1) : 1;

//console.log(fatorial1(4));



//----------------------------------------------------------------------
//Ex 2

const maiorPalavra = (str) => str.split(" ").sort((a,b)=>b.length - a.length)[0]

//console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'))



//----------------------------------------------------------------------
//Ex 3
//const clique = document.querySelector('#clique');
//const contador = document.querySelector('#contador');

//clique.addEventListener('click', () => {
//    contador.innerText = parseInt(contador.innerText)+1
//})

//----------------------------------------------------------------------
//Ex 4

const trocaX = (name) => {
    let frase = 'Tryber x aqui!';
    return frase.replace('x',name)
}

//trocaX('Gabriel')

//----------------------------------------------------------------------
//Ex 4.1

const habilidade = (name) => {
    const skill = ['JavaScript','HTML','CSS'];
    console.log(`${trocaX(name)}
Minhas três principais habilidades são:
* ${skill[0]}
* ${skill[1]}
* ${skill[2]}`)
}
//habilidade("Gabriel")
