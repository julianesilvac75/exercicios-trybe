//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 8;

for (let i = 1; i <= n; i += 1) {
    let line = "";
    for (let iLine = 1; iLine <= n; iLine +=1) {
        line += "*"
    }

    console.log(line);
}