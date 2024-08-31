function desafio14() {
    let nome = prompt("Insira o seu nome completo:");
    let dataNascimento = prompt("Insira a sua data de nascimento (yyyy-mm-dd):");
    let licenca = gerarLicenca(nome, dataNascimento);
    document.getElementById("resultado").innerHTML = "Licença gerada: " + licenca;
}

function gerarLicenca(nome, dataNascimento) {
    class LicencaVoo {
        constructor(nome, sobrenome, dataNascimento) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.dataNascimento = new Date(dataNascimento);
            this.licenca = false;
        }
        
        criarLicenca() {
            let sobrenomeAbreviado = this.sobrenome.slice(0, 5).toUpperCase().padEnd(5, '9');
            let ano = this.dataNascimento.getFullYear().toString();
            let mes = (this.dataNascimento.getMonth() + 1).toString().padStart(2, '0');
            let dia = this.dataNascimento.getDate().toString().padStart(2, '0');
            return `${sobrenomeAbreviado}-${ano[2]}${mes}${ano[3]}.${this.nome.charAt(0).toLowerCase()}`;
        }
    }

    let [primeiroNome, ...restoSobrenome] = nome.split(' ');
    let licencaVoo = new LicencaVoo(primeiroNome, restoSobrenome.join(' '), dataNascimento);
    return licencaVoo.criarLicenca();
}
