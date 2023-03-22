const alunos = ['Joao', 'Maria', 'Jose']

const nota = alunos.map(function(item){
    return{
        nome: item,
        nota: 6
    }
})

nota.push({
    nome: 'Joao',
    nota: 5
})

const aprovados = nota.filter(function(item){
    return item.nota >= 6
})


console.log(nota)
console.log(aprovados)