const conectaBancoDeDados = require('./conexao');
const connection = new conectaBancoDeDados();

const visualizar_por_aluno = (aluno,inicio, fim, callback) => {

  connection.query(`SELECT id, aluno, professor, disciplina, data, inicio, fim FROM aulas_agendadas 
  WHERE aluno LIKE ? AND data BETWEEN ? AND ? 
  ORDER BY data DESC `, [`%${aluno}%`, inicio, fim ], (err, result) => {
    if (err) {
      console.error('Erro tentar visualizar tabela:', err);

      return callback(err);
    }
     callback(null,result);

  });

//connection.end()
};

module.exports = visualizar_por_aluno