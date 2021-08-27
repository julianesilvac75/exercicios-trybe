/*Exercicio de fixação 1:

const base = 5;
let height = 8;

console.log(base);
console.log(height);

const area = base * height;

console.log(area);

const perimeter = base + base + height + height;

console.log(perimeter);

*/

/*Exercicio de fixacao 2


const notaDesafio = 90;

if(notaDesafio >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
}

else if(notaDesafio < 80 && notaDesafio >= 60) {
    console.log("Você está na nossa lista de espera.");
}

else {
    console.log("Você foi reprovada(o).");
}

Exercicio de fixacao 3


const currentHour = 9;
let message;

if(currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}

else if(currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
}

else if(currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
}

else if(currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
}

else if(currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message);

Exercicio de fixacao 4


let weekDay = 'terça-feira';

if(weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}

else if(weekDay === 'sábado' || weekDay === 'domingo') {
    console.log("FINALMENTE, descanso merecido UwU");
}

SWITCH --- CASE
let trafficLight = "roxo";

switch (trafficLight) {
    case "vermelho":
        console.log("pare");
        break;

    case "amarelo":
        console.log("atenção");
        break;

    case "verde":
        console.log("siga");
        break;

    default:
        console.log("valor não identificado")
}

Exercicio de fixação 5
*/

let resultado = "aleluia";

switch (resultado) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;

    case "lista":
        console.log("Você está na nossa lista de espera.");
        break;

    case "reprovada":
        console.log("Você foi reprovada(o).");
        break;

    default:
        console.log("Não se aplica.");
}