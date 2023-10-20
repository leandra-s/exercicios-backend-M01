function agendarPaciente(lista, nome) {
    lista.splice(lista.length, 0, nome)
    return lista.join()
}

function atenderPaciente(lista) {
    lista.splice(0, 1)
    return lista.join()
}

function cancelarAtendimento(lista, nome) {
    lista.splice(lista.indexOf(nome), 1)
    return lista.join()
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

console.log()

console.log(agendarPaciente(pacientes, 'Leandra'))
console.log(atenderPaciente(pacientes))
console.log(cancelarAtendimento(pacientes, 'Leandra'))
