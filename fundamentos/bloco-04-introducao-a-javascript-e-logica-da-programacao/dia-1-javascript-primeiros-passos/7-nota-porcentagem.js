let porcentagem = 75;

if(porcentagem >= 90 && porcentagem <= 100) {
    porcentagem = "Conceito A";
} else if(porcentagem >= 80 && porcentagem < 90) {
    porcentagem = "Conceito B";
} else if(porcentagem >= 70 && porcentagem < 80) {
    porcentagem = "Conceito C";
} else if(porcentagem >= 60 && porcentagem < 70) {
    porcentagem = "Conceito D";
} else if(porcentagem >= 50 && porcentagem < 60) {
    porcentagem = "Conceito E";
} else if(porcentagem < 50 && porcentagem >= 0) {
    porcentagem = "Conceito F";
} else {
    porcentagem = "Erro - insira uma nota válida";
}

console.log("Resultado: " + porcentagem);