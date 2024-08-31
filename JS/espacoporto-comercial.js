function desafio12() {
    let valor = parseInt(prompt("Insira o valor total em créditos:"));
    let resultado = contarMoedas(valor);
    document.getElementById("resultado").innerHTML = "Resultado: " + JSON.stringify(resultado);
}

function contarMoedas(valor) {
    let moedas = [500, 100, 25, 10, 5, 1];
    let resultado = {};
    for (let moeda of moedas) {
        resultado[moeda] = Math.floor(valor / moeda);
        valor %= moeda;
    }
    return resultado;
}
