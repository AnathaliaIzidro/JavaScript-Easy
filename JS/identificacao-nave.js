function desafio13() {
    let codigo = prompt("Insira o código de identificação da nave:");
    let resultado = validarCodigoNave(codigo);
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function validarCodigoNave(codigo) {
    let pares = 0, impares = 0;
    codigo = codigo.toString().split('');
    for (let i = 0; i < codigo.length - 1; i++) {
        if (i % 2 === 0) impares += parseInt(codigo[i]);
        else pares += parseInt(codigo[i]);
    }
    let verificador = (pares * 3 + impares) % 10;
    return verificador === 0 ? true : 10 - verificador === parseInt(codigo[11]);
}
