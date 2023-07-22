const nomeArquivo = 'Foto da Familia.pdf';

const isAllow = (doc) => {
    const strToArr = doc.split('.')
    for(let i = 1;i < strToArr.length;i++) {
        if(strToArr[i] === 'png' || strToArr[i] === 'jpeg' || strToArr[i] === 'jpg' || strToArr[i] === 'gif') {
            return 'Arquivo válido'
        }
        return 'Arquivo inválido'
    }
}  

console.log(isAllow(nomeArquivo))