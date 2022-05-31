

function calculadora() { // Calculadora
    
    let elementoA = parseInt(document.getElementById("elementoA").value);
    let elementoB = parseInt(document.getElementById("elementoB").value);
    let multiplicador = document.getElementById("multiplicador").value;
    let mensagem = 0;
    

    if(multiplicador === "*") {
        mensagem = elementoA * elementoB
    }else if(multiplicador === "+") {
        mensagem = elementoA + elementoB
    }else if(multiplicador === "-") {
        mensagem = elementoA - elementoB 
    }else if(multiplicador === "/") {
        mensagem = elementoA / elementoB 
    }
    document.getElementById("resultado").value = mensagem;
    document.getElementById("elementoA").value = "";
    document.getElementById("elementoB").value = "";
}

    
function numeroSecreto(){ //Número Secreto
    let secretNumber = parseInt(Math.random()*11);
    let number = parseInt(document.getElementById("numeroSecreto").value);
    let mensagem1 = '';
    if(secretNumber===number){
        mensagem1 = "Você acertou o número secreto!";
    }else if( secretNumber>10 || secretNumber<0){
        mensagem1 = "Digite um numero entre 0 e 10";
    }else if (secretNumber!== number){
        mensagem1 = "Você errou, o número secreto era " + secretNumber + "!";
    }else if (number === ""){
        
    }
    document.getElementById("imprimeNumeroSecreto").value =   mensagem1;
    document.getElementById("numeroSecreto").value = "";
}


function tasks(){ //Lista de tarefas (adicionar task)
    
    for(let index=0;index<5;index++){
        let tarefa = document.getElementById("tarefa").value;
        
        if( document.getElementById("task"+index).value === ""){
            document.getElementById("task"+index).value = tarefa;
            document.getElementById("tarefa").value = "";
        }
    }
}


function removerTask() { //Lista de tarefas (remover task)
    
    let removerTarefa = document.getElementById("removerTarefa").value;
    
    for(let i=0; i<5;i++){
        if(document.getElementById("task"+i).value.includes(removerTarefa)){
            document.getElementById("task"+i).value = "";
            document.getElementById("removerTarefa").value = "";
        }else{
            document.getElementById("removerTarefa").value = "";
        }
    }
}


function escolhaOCampo(){ // Seletor de campo 1
    
    let field = document.getElementById("field").value;
    
    return field  
    
}


function corDeFundo(){ //Seletor de cores
    let color = document.getElementById("color").value;
    let campo = escolhaOCampo();
    let fundo = document.getElementById("fundo"+ campo);
    
    fundo.style.backgroundColor=color;
    document.getElementById("color").value = "";
    console.log(color)
    console.log(campo)
}


function escolhaOCampo2(){ // Seletor de campo 2
    
    let field = document.getElementById("field2").value;
    return field  ;
    
}

function escolhaAFonte(){ //Seletor de fontes
    let field = escolhaOCampo2();
    let fundo = document.getElementById("fundo"+ field);
    let fonte = document.getElementById("fonte").value
    fundo.style.fontFamily=fonte;
    document.getElementById("fonte").value = "";
    
}


let campo = document.getElementById("field").value;
let colorField = document.getElementById("fundo"+ campo);
let colorBackground =  document.getElementById("color").value;

console.log(campo)
console.log(colorField)
console.log(colorBackground)


function addColorToDom(){




}




function addColorToLocalStorage(){

}






function initialRenderization(){
    


}