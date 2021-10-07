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

const allLessons = Object.assign({lesson1, lesson2, lesson3});

// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.

const countStudents = (obj) => {
    const lessons = Object.keys(obj);
    let students = 0;

    for (let index = 0; index < lessons.length; index += 1) {

        if (obj[lessons[index]].materia === 'Matemática') {
            students += obj[lessons[index]].numeroEstudantes;
        }
    }

    return students;
}

console.log(countStudents(allLessons));

console.log('------------');

// 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

const createReport = (obj, teacher) => {
    const lessons = Object.keys(obj);
    const result = {
        professor: '?',
        aulas: [],
        estudantes: 0
    }

    for (let index = 0; index < lessons.length; index += 1) {
        
        if (obj[lessons[index]].professor === teacher) {
            result.professor = teacher;
            result.aulas.push(obj[lessons[index]].materia);
            result.estudantes += obj[lessons[index]].numeroEstudantes;
        }
    }

    return result;
}

console.log(createReport(allLessons, 'Maria Clara'));