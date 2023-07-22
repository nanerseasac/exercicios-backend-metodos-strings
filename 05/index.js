const numeroCartao = '3006200008122002';

const filterCard = (str) => {
    const last4 = str.slice(-4)
    const first4 = str.slice(0,4)
    let strMid = ''
    for(let i = 4;i < str.length - 4;i++) {
        strMid += '*';
    }
    return `${first4}${strMid}${last4}`
}

console.log(filterCard(numeroCartao))