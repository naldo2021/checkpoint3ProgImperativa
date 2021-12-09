const aluno = {
    nome: '',
    quantidadeFaltas: 0,
    notas: [],
    construtor: function(nome, faltas, notas) {
        this.nome = nome;
        this.quantidadeFaltas = faltas;
        this.notas = notas;
    },
    calcularMedia: function(aluno) {
        let total = 0;

        aluno.notas.forEach(nota => {
            total += nota;
        });

        return total / aluno.notas.length;
    },
    aumentarFaltas: function(aluno) {
        aluno.quantidadeFaltas++;
    }
}

module.exports = aluno;