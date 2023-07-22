const celular = 7199918888;

const celNum = (num) => {
	const numStr = num.toString();
	let ddd = "";
	let firstPart = "";
	let secondPart = "";
	const nine = "9";
	if (numStr.length > 9) {
		const noDDD = numStr.slice(2);
		ddd = numStr.slice(0, 2);
		secondPart = noDDD.slice(-4);
		firstPart = noDDD.slice(-8, -4);
	}
	if (numStr.length === 9 || numStr.length === 8) {
		firstPart = numStr.slice(-8, -4);
		secondPart = numStr.slice(-4);
	}

	if (numStr.length === 10 || numStr.length === 11) {
		return `(${ddd}) ${nine} ${firstPart}-${secondPart}`;
	} else if (numStr.length === 8 || numStr.length === 9) {
		return `${nine} ${firstPart}-${secondPart}`;
	}
	return "Número Inválido";
};

console.log(celNum(celular));
