function desafio11() {
    let coordenadas = prompt("Insira o par ordenado (x,y):");
    let [x, y] = JSON.parse(coordenadas);
    let resultado = gerarCoordenadas([x, y]);
    document.getElementById("resultado").innerHTML = "Resultado: " + JSON.stringify(resultado);
}

function gerarCoordenadas([x, y]) {
    let coordenadas = [];
    for (let i = 0; i <= x; i++) {
        for (let j = 0; j <= y; j++) {
            coordenadas.push([i, j]);
        }
    }
    return coordenadas;
}
