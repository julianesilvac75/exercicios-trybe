// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 

let n = 5;
let line = "*";

for (let i = 1; i <= n; i += 1) {
    console.log(line);
    line += "*";
}