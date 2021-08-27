const numero1 = 128;
const numero2 = 128;
const numero3 = 128;

if(numero1 > numero2 && numero1 > numero3) {
    console.log(numero1 + " é maior que " + numero2 + " e " + numero3);
} else if(numero2 > numero1 && numero2 > numero3) {
    console.log(numero2 + " é maior que " + numero1 + " e " + numero3);
} else if(numero3 > numero1 && numero3 > numero2) {
    console.log(numero3 + " é maior que " + numero1 + " e " + numero2);
} else {
    console.log("Os três numeros são iguais");
}
