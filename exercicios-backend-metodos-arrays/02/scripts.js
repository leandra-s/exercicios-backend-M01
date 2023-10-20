function divisaoDeGrupos(nomes, numero) {
    let grupo
    let totalDeGrupos = 0

    while (nomes.length > numero) {
        totalDeGrupos += 1
        grupo = nomes.splice(0, tamanhoDoGrupo)
        console.log(`Grupo ${totalDeGrupos}: ${grupo.join()}`)

    }
    totalDeGrupos += 1
    grupo = nomes
    console.log(`Grupo ${totalDeGrupos}: ${grupo.join()}`)

}

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Leandra', 'felipe', 'Patricia', 'ione'];
const tamanhoDoGrupo = 4;

divisaoDeGrupos(nomes, tamanhoDoGrupo)