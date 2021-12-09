const aluno = require('./aluno');
const estudantes = require('./estudantes');

const curso = {
    nomeCurso: 'Certifield Tech Developer',
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: [
        estudantes.edinaldo,
        estudantes.roseneide,
        estudantes.ivonete,
        estudantes.fernando
    ],
    adicionarAluno: function(nome, faltas, notas) {
        this.listaEstudantes.push(new aluno.construtor(nome, faltas, notas));
    },
    aprovacao: function(estudante) {
        const media = aluno.calcularMedia(estudante);

        if (
            media >= this.notaAprovacao &&
            estudante.quantidadeFaltas < this.faltasMaximas
        ) {
            return `O Aluno ${estudante.nome} foi APROVADO concluindo todo o curso!`;
        } else if (
            estudante.quantidadeFaltas === this.faltasMaximas &&
            media > this.notaAprovacao * 1.1
        ) {
            return `O Aluno ${estudante.nome} foi APROVADO com ressalvas!`;
        } else {
            return `O Aluno ${estudante.nome} foi REPROVADO com isso nada a declarar!`;
        }
    },
    listaAprovados: function() {
        let todos = [];

        this.listaEstudantes.forEach(estudante => {
            todos.push(this.aprovacao(estudante));
        });

        return todos;
    }
}

curso.adicionarAluno('Roberto Marinho', 0, [8, 9, 6]);

const aprovados = curso.listaAprovados();

aprovados.forEach(aprovado => {
    console.log(aprovado);
});