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
