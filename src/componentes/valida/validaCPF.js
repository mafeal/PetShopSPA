function verificaCPFInvalidos(cpf) {
    const cpfsInvalidos = [
      "11111111111",
      "22222222222",
      "33333333333",
      "44444444444",
      "55555555555",
      "66666666666",
      "77777777777",
      "88888888888",
      "99999999999",
      "00000000000"
    ];
    
    return cpfsInvalidos.indexOf(cpf) === -1;
}

function verificaPrimeiroDigito (cpf) {
    const peso = 11;
    const totalDeDigitosPrimeiraParte = 9;
    const digitpoDeVerificacao = parseInt(cpf.substring(9, 10));
    return verificaDigito(
        cpf, 
        totalDeDigitosPrimeiraParte, 
        peso, 
        digitpoDeVerificacao
    );
}

function verificaSegundoDigito (cpf) {
    const peso = 12;
    const totalDeDigitosPrimeiraParte = 10;
    const digitpoDeVerificacao = parseInt(cpf.substring(10, 11));
    return verificaDigito(
        cpf, 
        totalDeDigitosPrimeiraParte, 
        peso, 
        digitpoDeVerificacao
    );
}

function somaNumerosCPF(cpf, totalDeDigitos, peso) {
    let soma = 0;
    for(let i = 1; i <= totalDeDigitos; i++){
        soma += parseInt(cpf.substring(i - 1, i)) * (peso - i);
    }
    return soma;
}

function verificaDigito (cpf, totalDeDigitos, peso, digitoDeVerificacao) {
    const soma = somaNumerosCPF(cpf, totalDeDigitos, peso);
    const resto = (soma * 10) % 11;
    return resto == 10 || resto == 11 ? digitoDeVerificacao === 0 : resto === digitoDeVerificacao 
}

function validaCPF(cpf) {
    return (
      verificaPrimeiroDigito(cpf) &&
      verificaSegundoDigito(cpf) &&
      verificaCPFInvalidos(cpf)
    );
}

export default validaCPF