const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
const lesson2 = {
materia: 'História',
numeroEstudantes: 20,
professor: 'Carlos',
};
  
const lesson3 = {
materia: 'Matemática',
numeroEstudantes: 10,
professor: 'Maria Clara',
turno: 'noite',
};

// Exercício 1

const addShift = (obj, key, value) => obj[key] = value;

addShift(lesson2, 'turno', 'noite');

console.log(lesson2);

console.log('----------');

// Exercício 2

const keyList = (obj) => Object.keys(obj);

console.log(keyList(lesson1));

console.log('----------');

// Exercício 3

const objSize = (obj) => Object.keys(obj).length;

console.log(objSize(lesson2));

console.log('----------');

// Exercício 4

const valueList = (obj) => Object.values(obj);

console.log(valueList(lesson3));

console.log('----------');

// Exercício 5

const allLessons = Object.assign({lesson1, lesson2, lesson3})

console.log(allLessons);

console.log('----------');

// Exercício 6

const studentsAmount = (obj) => obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;

console.log(studentsAmount(allLessons));

console.log('----------');

// Exercício 7

const valueByIndex = (obj, index) => Object.values(obj)[index];

console.log(valueByIndex(lesson1, 0));

console.log('----------');

// Exercício 8

const verifyPair = (obj, key, value) => {
    const arrKey = Object.keys(obj);
    const arrValue = Object.values(obj)
    
    for (let index = 0; index < arrKey.length; index += 1) {
        if (arrKey[index] === key && arrValue[index] === value) {
            return true;
        }
    }

    return false;
}

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'))
// verifyPair(lesson3, 'turno', 'noite')
