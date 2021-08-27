const a = 10;
const b = 4;
let operador = "%";

switch (operador) {
    case "+":
        console.log(a + operador + b + " é igual a " + (a + b));
        break;
    case "-":
        console.log(a + operador + b + " é igual a " + (a - b));
        break;
    case "*":
        console.log(a + operador + b + " é igual a " + (a * b));
        break;
    case "/":
        console.log(a + operador + b + " é igual a " + (a / b));
        break;
    case "%":
        console.log("O resto da divisão entre " + a + " e " + b + " é igual a " + (a % b));
        break;
    default:
        console.log("Insira um operador válido");
}