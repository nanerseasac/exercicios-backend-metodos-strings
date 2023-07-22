const texto = "Aprenda programar do zero na Cubos Academy";

const transformText = (txt) => {
    const text = txt.toLowerCase().split(' ').join('-')
    return text
}

console.log(transformText(texto))