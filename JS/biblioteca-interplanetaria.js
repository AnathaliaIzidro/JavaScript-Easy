function desafio8() {
    let nome = prompt("Insira o nome completo do autor:");
    let resultado = abreviarNome(nome);
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function abreviarNome(nome) {
    let nomes = nome.split(" ");
    let ultimoNome = nomes.pop().toUpperCase();
    let iniciais = nomes.map(n => n.charAt(0).toUpperCase() + '.').join('');
    return `${ultimoNome},${iniciais}`;
}
