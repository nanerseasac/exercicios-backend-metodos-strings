const cpf = "12345678900";
const cnpj = "12345678000199";

const formatarCPF = (cpf) => {
    const cpfFirst = cpf.slice(0, 3)
    const cpfSecond = cpf.slice(3, 6)
    const cpfThird = cpf.slice(6, 9)
    const cpfFourth = cpf.slice(-2)
    if(cpf.length !== 11) {
        return 'CPF Inválido'
    }
    return `${cpfFirst}.${cpfSecond}.${cpfThird}-${cpfFourth}`
    
}

const formatarCNPJ = (cnpj) => {
    const cnpjFirst = cnpj.slice(0, 3)
    const cnpjSecond = cnpj.slice(3, 6)
    const cnpjThird = cnpj.slice(6, 9)
    const cnpjFourth = cnpj.slice(9, 13)
    const cnpjFifth = cnpj.slice(-2)


    if(cnpj.length !== 14) {
        return 'CNPJ Inválido'
    }
    return `${cnpjFirst}.${cnpjSecond}.${cnpjThird}/${cnpjFourth}-${cnpjFifth}`
}


console.log(formatarCPF(cpf))

console.log(formatarCNPJ(cnpj))