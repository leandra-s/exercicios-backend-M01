function corrigirProva(prova) {
    let notaFinal = 0;
    let acertos = 0;

    for (let item = 0; item < prova.questoes.length; item++) {
        if (prova.questoes[item].correta === prova.questoes[item].resposta) {
            acertos += 1
            notaFinal += 2;
        }
    }
    let questaoOuQuestoes = acertos === 1 ? 'questão' : 'questões';
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} ${questaoOuQuestoes} e obteve nota ${notaFinal}`);
}


const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

corrigirProva(prova)