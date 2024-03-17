const conectaBancoDeDados = require('./conexao');
const connection = new conectaBancoDeDados();

const visualizar_aula = (inicio, fim, callback) => {

  connection.query(`SELECT * FROM aulas_agendadas WHERE data BETWEEN ? AND ? ORDER BY data`,[inicio, fim], (err, result) => {
    if (err) {
      console.error('Erro tentar visualizar tabela:', err);

      return err;
    }
     callback(null,result);

  });

//connection.end()
};

module.exports = visualizar_aula