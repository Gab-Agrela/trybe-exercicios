function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function daysToHtml (){
    let ul = document.querySelector('#days');
    
    for(let i = 0 ; i<dezDaysList.length; i+=1){
      ul.appendChild(document.createElement('li'));
    }

    let li = ul.children
    for(let index = 0; index<li.length; index+=1){
      li[index].innerText = dezDaysList[index];
      li[index].className = 'day'
    }

    let day = document.querySelectorAll('.day');
    day[25].classList.add('holiday');
    day[26].classList.add('holiday');
    day[32].classList.add('holiday');

    day[5].classList.add('friday');
    day[12].classList.add('friday');
    day[19].classList.add('friday');
    day[26].classList.add('friday');

  }daysToHtml()

  function createHolidayBtn(str){
    let button = document.createElement('button');
    let div = document.querySelector('.buttons-container');
    div.appendChild(button);
    div.children[0].id = 'btn-holiday';
    div.children[0].innerText = str 

  }createHolidayBtn('Feriado')

  let holidayButton = document.querySelector('#btn-holiday');

  holidayButton.addEventListener('click', function () {
    let holiday = document.querySelectorAll('.holiday');
    if (holiday[0].style.background === '' || holiday[0].style.background === 'rgb(238, 238, 238)'){
      for(let i = 0; i<holiday.length ; i+=1){
        holiday[i].style.background = 'green';
        
      }
    }else {
      for(let index = 0; index<holiday.length ; index+=1){
        holiday[index].style.background = 'rgb(238, 238, 238)';
        
      }
    }
  })


  function createFridayBtnc(str){
    let button = document.createElement('button');
    let div = document.querySelector('.buttons-container');
    div.appendChild(button);
    div.children[1].id = 'btn-friday';
    div.children[1].innerText = str 
  }createFridayBtnc('Sexta-Feira')

  let fridayButton = document.querySelector('#btn-friday')
  
  fridayButton.addEventListener('click', function () {
    let friday = document.querySelectorAll('.friday');
    let obj = {
      0 : '4',
      1 : '11',
      2 :'18',
      3 : '25'
    }
    if (friday[0].innerText === obj[0] ){
      for(let i = 0; i<friday.length ; i+=1){
        friday[i].innerText = 'Sextoou!!';
      }
    }else {
      for(let index = 0; index<friday.length ; index+=1){
        friday[index].innerText = obj[index]
      }
    }
  })


let ul = document.querySelector('#days').children;

function zoom (){
  for(let i = 0; i<ul.length; i+=1){
    ul[i].addEventListener('mouseover', (event)=>event.target.style.fontSize = '24px')
  }
}zoom()

function zoom2 (){
  for(let i = 0; i<ul.length; i+=1){
    ul[i].addEventListener('mouseout', (event)=>event.target.style.fontSize = '20px')
  }
}zoom2()

function addTarefa (str){
  let span = document.createElement('span');
  let div = document.querySelector('.my-tasks')
  span.innerHTML = str
  div.appendChild(span)
}addTarefa('Cozinhar')

function addLegenda(str){
  let div = document.createElement('div');
  div.style.background = str;
  div.className = 'task'
  let pai = document.querySelector('.my-tasks');
  pai.appendChild(div)
  
  
}let cor = 'blue'
addLegenda(cor)
let divTask = document.querySelector('.my-tasks').children[2];

divTask.addEventListener('click', function (){
  if (divTask.classList.length === 1){
    divTask.classList.add('selected')
  }else {
    divTask.classList.remove('selected')
  }
})

function colorOfActivies (){
  for(let i = 0; i<ul.length; i+=1){
    ul[i].addEventListener('click', (event)=> {if(event.target.style.color === '' || event.target.style.color === 'rgb(119,119,119)' ){
      event.target.style.color = cor
    }else {event.target.style.color = 'rgb(119,119,119)'}
  })
  }
}colorOfActivies()

let inputUl = document.createElement('ul');
inputUl.className = 'input-ul'
let inputContainer = document.querySelector('.input-container');
inputContainer.appendChild(inputUl);

let btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click',function () {
  let input = document.querySelector('#task-input');
  if(input.value === ''){
    alert('Erro')
  }else{
  let li = document.createElement('li');
  li.className = 'ul-li'
  li.innerText = input.value;
  document.querySelector('.input-ul').appendChild(li)
  input.value = ''
  }
})

document.addEventListener('keypress', function(e){
  if(e.keyCode == 13){
    let input = document.querySelector('#task-input');
    if(input.value === ''){
      alert('Erro')
    }else{
    let li = document.createElement('li');
    li.className = 'ul-li'
    li.innerText = input.value;
    document.querySelector('.input-ul').appendChild(li)
    input.value = ''
    }
  }
}, false);