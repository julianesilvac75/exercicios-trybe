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


  // Exercício 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function addHolidayClass(element, a, b, c) {
      if (element.innerText === a || element.innerText === b || element.innerText === c) {
          element.classList.add('holiday')
      }
  }

  function addFridayClass(element, a, b, c, d) {
      if (element.innerHTML === a || element.innerHTML === b || element.innerHTML === c || element.innerHTML === d) {
          element.classList.add('friday');
      }
  }

  for (let index = 0; index < dezDaysList.length; index += 1) {
      let day = document.createElement('li');
      day.className = "day";
      day.innerText = dezDaysList[index];
      addHolidayClass(day, '24', '25', '31');
      addFridayClass(day, '4', '11', '18', '25');
      document.getElementById('days').appendChild(day);
  }

  // Exercício 2:

  function createButton(idName, string) {
      let button = document.createElement('button');
      button.setAttribute('id', idName);
      button.innerText = string;
      document.querySelector('.buttons-container').appendChild(button);
  }

  let holidayButton = createButton('btn-holiday', 'Feriados')



