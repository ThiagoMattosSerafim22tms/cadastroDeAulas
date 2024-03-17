const conectaBancoDeDados = require('./conexao');
const conection = new conectaBancoDeDados();

conection.query('ALTER TABLE aulas_agendadas ADD data VARCHAR(255), ADD inicio VARCHAR(255), ADD fim VARCHAR(255)', (err, result) => {
    if (err) {
      console.error('Erro ao inserir colunas:', err);
      return;
    }
    console.log('Colunas inserida com sucesso');
   // conection.end()
  }
    )