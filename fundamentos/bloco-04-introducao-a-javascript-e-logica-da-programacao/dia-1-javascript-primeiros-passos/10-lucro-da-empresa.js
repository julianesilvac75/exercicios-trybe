const valorCusto = 100;
const impostoSobreOCusto = (valorCusto * 20) / 100;
const valorCustoTotal = valorCusto + impostoSobreOCusto;
const valorVenda = 150;
let quantidadeProdutosVendidos = 1000;

if(quantidadeProdutosVendidos >= 0) {
    let lucro = (valorVenda - valorCustoTotal) * quantidadeProdutosVendidos;
    console.log("O lucro será de R$" + lucro);
} else {
    console.log("Erro: insira um valor positivo");
}