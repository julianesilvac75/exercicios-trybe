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

function addHolidayClass(element, array) {
    for (let index = 0; index < array.length; index += 1) {
        if (element.innerText === array[index]) {
            element.classList.add('holiday')
        }
    }

}

function addFridayClass(element, array) {
    for (let index = 0; index < array.length; index += 1) {
        if (element.innerHTML === array[index]) {
            element.classList.add('friday');
        }

    }
}

let listOfHolidays = ['24', '25', '31'];
let listOfFridays = ['4', '11', '18', '25'];

for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = document.createElement('li');
    day.className = "day";
    day.innerText = dezDaysList[index];
    addHolidayClass(day, listOfHolidays);
    addFridayClass(day, listOfFridays);
    document.getElementById('days').appendChild(day);
}

// Exercício 2:

function createButton(idName, string) {
    let button = document.createElement('button');
    button.setAttribute('id', idName);
    button.innerText = string;
    document.querySelector('.buttons-container').appendChild(button);
}

createButton('btn-holiday', 'Feriados');

// Exercício 3:

document.getElementById('btn-holiday').addEventListener('click', function() {
    let holidays = document.getElementsByClassName('holiday');
    for (let index = 0; index < holidays.length; index += 1) {
        let color = window.getComputedStyle(document.getElementsByClassName('holiday')[index]).getPropertyValue("background-color");
        if (color === 'rgb(117, 204, 117)') {
            holidays[index].style.backgroundColor = "rgb(238,238,238)";
        } else {
            holidays[index].style.backgroundColor = 'rgb(117, 204, 117)';
        }
    }
});

// Exercício 4:

createButton('btn-friday', 'Sexta-feira');

// Exercício 5:

document.getElementById('btn-friday').addEventListener('click', function() {
    let fridays = document.getElementsByClassName('friday');
    for (let index = 0; index < fridays.length; index += 1) {
        if (fridays[index].innerText == listOfFridays[index]) {
            fridays[index].innerText = 'Sextou!!';
        } else {
            fridays[index].innerText = listOfFridays[index];
        }
    }
});

// Exercício 6:

let daysOfMonth = document.getElementsByClassName('day');;

for (let index = 0; index < daysOfMonth.length; index += 1) {
    daysOfMonth[index].addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '2em';
    })

    daysOfMonth[index].addEventListener('mouseout', function(event) {
        event.target.style.fontSize = '1em';
    })
}

// Exercício 7:

function addNewTask(task) {
    let newTask = document.createElement('span');
    newTask.innerText = task;
    document.querySelector('.my-tasks').appendChild(newTask);
}

addNewTask('cozinhar');

// Exercício 8:

function addColorLegend(color) {
    let newLegend = document.createElement('div');
    newLegend.className = 'task';
    newLegend.style.backgroundColor = color;
    document.querySelector('.my-tasks').appendChild(newLegend);
}

addColorLegend('rgb(160, 219, 0)');

// Exercício 9:

let tasksList = document.getElementsByClassName('task');

for (let index = 0; index < tasksList.length; index += 1) {
    tasksList[index].addEventListener('click', function(event) {
        if (event.target.className === 'task') {
            event.target.classList.add('selected');
        } else {
            event.target.classList.remove('selected');
        }
    })
}