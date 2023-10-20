//Sendo assim, o sistema deve receber o nome do livro e informar a sua posição na estante.

const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

function acharLivro(livro, nomeLivro) {
    const indiceLivro = livro.findIndex((livro) => {
        return livro === nomeLivro
    })
    console.log(`O livro está na posição ${indiceLivro + 1}`)
}


acharLivro(livros, nomeDoLivro)