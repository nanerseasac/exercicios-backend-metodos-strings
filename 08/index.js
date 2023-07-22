const cpf = "011.022.033-44";

const cpfWithoutsht = (cpf) => {
	const cpfArr = cpf.split("");
	const cpfWithout = cpfArr.filter((item) => item !== "-" && item !== ".");

	return cpfWithout.join("");
};

console.log(cpfWithoutsht(cpf));
