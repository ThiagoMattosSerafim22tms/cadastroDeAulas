const conectaBancoDeDados = require('./conexao');
const connection = new conectaBancoDeDados();

const tabela = 'aulas_agendadas'
// Cria uma nova base de dados
connection.query(`SHOW COLUMNS FROM ${tabela} `, (err, result, fields) => {
    if (err) {
      console.error('Erro tentar visualizar colunas da tabela:', err);
      return;
    }

    console.log(typeof(result));
    
    console.log(result);
    
    return
  });
  
// connection.end()