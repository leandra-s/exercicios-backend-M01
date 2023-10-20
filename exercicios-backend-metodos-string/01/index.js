const comentario = "Esse COVID é muito perigoso!";

function analisandoComentario(comentario) {
    const comentarioMaiusculo = comentario.toLocaleUpperCase();

    if (comentarioMaiusculo.includes("COVID") || comentarioMaiusculo.includes("PANDEMIA")) {
        console.log('Comentário bloqueado por conter palavras proibidas')
    } else {
        console.log('Comentário autorizado')
    }

}
analisandoComentario(comentario);


