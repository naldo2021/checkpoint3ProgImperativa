const aluno = require('./aluno');

const edinaldo = new aluno.construtor('Edinaldo Silva', 0, [9, 10, 10]);
aluno.aumentarFaltas(edinaldo);
aluno.aumentarFaltas(edinaldo);

const ivonete = new aluno.construtor('Ivonete Pereira', 1, [7, 6, 9]);
aluno.aumentarFaltas(ivonete);

const roseneide = new aluno.construtor('Roseneide Ferreira', 5, [0, 5, 3]);
const fernando = new aluno.construtor('Fernando Domingos', 0, [2, 5, 7]);
aluno.aumentarFaltas(fernando);

module.exports = {
    edinaldo,
    ivonete,
    roseneide,
    fernando,
}