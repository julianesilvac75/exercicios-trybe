// callback

const checkAnswers = (rightAnswers, studentAnswers) => {
    let finalScore = 0;
    for (let index = 0; index < studentAnswers.length; index += 1) {
        if(studentAnswers[index] === 'N.A') {
            finalScore = finalScore;
        } else if(studentAnswers[index] === rightAnswers[index]) {
            finalScore += 1;
        } else {
            finalScore -= 0.5;
        }
    }

    return finalScore;
}

// HOF 

const studentScore = (rightAnswers, studentAnswers, callback) => {
    return `Sua pontuação final é de ${callback(rightAnswers, studentAnswers)} pontos.`
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(studentScore(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));