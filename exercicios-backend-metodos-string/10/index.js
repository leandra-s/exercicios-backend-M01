const nomeArquivo = 'Foto da Familia.pdf';

// São permitidos arquivos: jpg, jpeg, gif e png;

function validacaoDeArquivos(nomeArquivo) {
    const depoisDoPonto = nomeArquivo.lastIndexOf('.')

    if (nomeArquivo.slice(depoisDoPonto + 1) === 'jpg' || nomeArquivo.slice(depoisDoPonto + 1) === 'jpeg' || nomeArquivo.slice(depoisDoPonto + 1) === 'gif' || nomeArquivo.slice(depoisDoPonto + 1) === 'jpg' || nomeArquivo.slice(depoisDoPonto + 1) === 'png') {
        return 'Arquivo válido'
    } else {
        return 'Arquivo inválido'
    }
}

console.log(validacaoDeArquivos(nomeArquivo))