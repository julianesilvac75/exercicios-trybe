// faça uma pirâmide com n asteriscos de base:

let n = 6;
let asterisco = "*"
let linha = "";

let centro = (n + 1) / 2;
let controleEsq = centro; 
let controleDir = centro;

for (let indexLinha = 0; indexLinha < centro; indexLinha += 1){
    for (let index = 0; index <= n; index += 1) {
        if(index >= controleEsq && index <= controleDir) {
            linha += asterisco;
        } else {
            linha += " ";
        }
    }
    console.log(linha);
    linha = "";
    controleDir += 1;
    controleEsq -= 1
}
