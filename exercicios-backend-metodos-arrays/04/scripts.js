function filaDeAtendimento(lista, operacao, nome) {// a lista de todos os pacientes na fila, o tipo de operação para um paciente, que pode ser atender ou agendar e o nome do paciente.

    if (operacao === 'agendar') {
        lista.splice(lista.length, 1, nome)
        return lista.join()
    }
    if (operacao === 'atender') {
        lista.splice(0, 1)
        return lista.join()
    }


}
const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

console.log(filaDeAtendimento(pacientes, 'agendar', 'leandra'))