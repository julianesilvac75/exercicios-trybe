const numbers = [32, 15, 3, 2, -5, 56, 10];
// let biggerNumber = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > biggerNumber) {
//         biggerNumber = numbers[index];
//     }
// }

// console.log(biggerNumber);
const numbers2 = [50, 85, -30, 3, 15]

const biggerNumber = numbers2.reduce((bigger, number) => {
    if (bigger > number) {
        return bigger;
    }

    return number;
}, 80)

console.log(biggerNumber);

console.log('------------');

const numbers3 = [18, 20, 23, 53, 4, 5, 76, 23, 54];

const sumEvenNumbers = numbers3.reduce((result, number) => (result % 2 === 0 && number % 2 === 0) ? result + number : result);

console.log(sumEvenNumbers);

console.log('------------');

// mostrar na tela um relatório que diz em qual matéria o estudante foi melhor

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

const betterLesson = (arr) => {
    
    const getBestLesson = obj => {
        const biggerGrade = obj.materias.reduce((result, grade) => (result.nota > grade.nota) ? result : grade)

        const student = {
            nome: obj.nome,
            materia: biggerGrade.name
        }

        return student;
    }
    return arr.map(getBestLesson)
}

console.log(betterLesson(estudantes));