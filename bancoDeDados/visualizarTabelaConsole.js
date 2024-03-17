const conectaBancoDeDados = require('./conexao');
const connection = new conectaBancoDeDados();

// Cria uma nova base de dados
connection.query(`SELECT  data FROM aulas_agendadas WHERE aluno LIKE '% %' ORDER BY data DESC `, (err, result) => {
    if (err) {
      console.error('Erro tentar visualizar tabela:', err);
      return;
    }

    console.log(typeof(result));
    
    console.log(result);
    
    return
  });
  
 //connection.end()