let salarioBruto = -50;
let valorINSS;

//calculo do valor do INSS:
if(salarioBruto >= 0 && salarioBruto <= 1556.94) {
    valorINSS = (salarioBruto * 8) / 100;
} else if(salarioBruto <= 2594.92) {
    valorINSS = (salarioBruto * 9) / 100;
} else if(salarioBruto <= 5189.82) {
    valorINSS = (salarioBruto * 11) / 100;
} else if(salarioBruto > 5189.92) {
    valorINSS = 570.88;
} else {
    console.log("Erro: insira um número válido");
}

let salarioBase = salarioBruto - valorINSS;

console.log("Valor do salário bruto: R$" + salarioBruto);
console.log("Valor do INSS: R$" + valorINSS);
console.log("Valor do salário-base: R$" + salarioBase);

let valorIR;

//calculo do valor do IR
if(salarioBase <= 1903.98) {
    valorIR = 0;
} else if(salarioBase <= 2826.65) {
    let aliquotaIR = (salarioBase * 7.5) / 100;
    valorIR = aliquotaIR - 142.80;
} else if(salarioBase <= 3751.05) {
    let aliquotaIR = (salarioBase * 15) / 100;
    valorIR = aliquotaIR - 354.80;
}  else if(salarioBase <= 4664.68) {
    let aliquotaIR = (salarioBase * 22.5) / 100;
    valorIR = aliquotaIR - 636.13;
} else {
    let aliquotaIR = (salarioBase * 27.5) / 100;
    valorIR = aliquotaIR - 869.36;
}

console.log("Valor do IR: R$" + valorIR);

let salarioLiquido = salarioBase - valorIR;

console.log("O valor líquido do salário será de: R$" + salarioLiquido);
