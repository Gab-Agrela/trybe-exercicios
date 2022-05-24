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
        holiday[i].style.color = 'rgb(238, 238, 238)';
      }
    }else {
      for(let index = 0; index<holiday.length ; index+=1){
        holiday[index].style.background = 'rgb(238, 238, 238)';
        holiday[index].style.color = '#777';
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

