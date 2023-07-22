const email = "aluno@cubos.academy";

const verifyEmail = (email) => {
	if (
		email[0] === "." ||
		email[email.length - 1] === "." ||
		!email.includes(".") ||
		!email.includes("@")
	) {
		return "E-mail inválido";
	}
	return "E-mail válido";
};

console.log(verifyEmail('.messias@cubos'));
