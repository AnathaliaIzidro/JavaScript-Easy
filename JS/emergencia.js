function desafio9() {
    let codigo = prompt("Insira o código de transmissão:");
    let resultado = validarCodigo(codigo);
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function validarCodigo(codigo) {
    let frequencia = {};
    for (let char of codigo.replace(/\s+/g, '').toLowerCase()) {
        frequencia[char] = (frequencia[char] || 0) + 1;
    }
    let valores = Object.values(frequencia);
    return valores.every(v => v === valores[0]);
}
