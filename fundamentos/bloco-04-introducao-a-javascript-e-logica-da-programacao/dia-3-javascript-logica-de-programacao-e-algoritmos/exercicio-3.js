let n = 5;
let asterisco = "*"
let linha = "";
let condicao = n -1

for (let indexLinha = 0; indexLinha < n; indexLinha += 1){
    for (let index = 0; index < n; index += 1) {
        if(index < (condicao)) {
            linha += " ";
        } else {
            linha += "*";
        }
    }
    console.log(linha);
    linha = "";
    condicao -= 1;
}
