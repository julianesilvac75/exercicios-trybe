const angulo1 = 60;
const angulo2 = 90;
const angulo3 = -60;

let soma = angulo1 + angulo2 + angulo3

if(angulo1 >= 0 && angulo2 >= 0 && angulo3 > 0) {
    if(soma === 180) {
        console.log(true);
    } else {
        console.log(false);
    }

} else {
    console.log("Erro: insira um valor positivo");
}