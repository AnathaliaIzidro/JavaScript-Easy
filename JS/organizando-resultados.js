function desafio7() {
    let input = prompt("Insira o array bidimensional (ex: [[1,5,3],[6,19,11],[47,128,5],[1,93,57,42,103]]):");
    let array = JSON.parse(input);
    let resultado = organizarResultados(array);
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function organizarResultados(arr) {
    return arr.flat().sort((a, b) => a - b);
}
