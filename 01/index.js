const comentario = "Esse COVID é muito perigoso!";

const filterSystem = (str) => {
    if(str.includes("COVID" || 'covid')) {
        console.log("Comentário bloqueado por conter palavras proibidas")
    }
};

filterSystem(comentario);



