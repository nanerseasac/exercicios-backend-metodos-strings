const nome = "Guido Cerqueira";

const apelido = (nome) => {
	let apelido = "";
	if (nome.length >= 13) {
		const apelidoLength = nome.length
		const minusculo = nome.toLowerCase().replace(" ", "").padStart(apelidoLength, "@");
		const strLength = minusculo.slice(0, 13);
		apelido = strLength;
	}
	return apelido;
};

console.log(apelido(nome));
