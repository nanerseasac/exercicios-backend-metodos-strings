let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

const formatAll = {
	email: function (email) {
		return email.trim();
	},
	nameUp: function (name) {
		const nameArr = name.split(" ");
		for (let i = 0; i < nameArr.length; i++) {
            nameArr[i] = nameArr[i][0].toUpperCase() + nameArr[i].slice(1)
        }
        return nameArr.join(' ')
	},
    idformat: function(id) {
        return id.padStart(6,'0')
    }
};


console.log(formatAll.email(email))
console.log(formatAll.nameUp(nome))
console.log(formatAll.idformat(identificador))