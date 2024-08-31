function desafio10() {
    let numero = parseInt(prompt("Insira o número para calcular o fatorial:"));
    let resultado = fatorial(numero);
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function fatorial(n) {
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}
