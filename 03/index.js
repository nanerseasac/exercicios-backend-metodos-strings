const texto = "Aprenda programar do zero na Cubos Academy";

const transformText = (txt) => {
    let text = ''
    for(let i = 0;i < txt.length; i++) {
       const textoLow = txt.toLowerCase()
       text = textoLow
       while(text !== text.replace(' ','-')) {
        text = text.replace(' ','-')
       }
    }
    return text
}

console.log(transformText(texto))