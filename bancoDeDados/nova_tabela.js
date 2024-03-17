const conectaBancoDeDados = require('./conexao');
const conection = new conectaBancoDeDados();

let nova_tabela = "tabela_de_aulas";

conection.query(`CREATE TABLE IF NOT EXISTS ${nova_tabela} (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  aula JSON UNIQUE, 
  professor VARCHAR(255), 
  aluno VARCHAR(255), 
  data DATE, 
  inicio TIME, 
  fim TIME
  )`, (err, result) => {
    if (err) {
      console.error('Erro ao criar tabela:', err);
      return;
    }
    console.log('Tabela criada com sucesso');
  });

//conection.end()
