//const { json } = require('body-parser');
const conectaBancoDeDados = require('./conexao');
const conection = new conectaBancoDeDados();


const atulaizarAula=(id, aluno,professor, data,inicio,fim, callback)=>{


    conection.query(`UPDATE aulas_agendadas SET aluno = ?, professor = ?, data=?, inicio = ?, fim = ? WHERE id = ?`,
     [aluno, professor, data, inicio, fim, id], (err, result) => {
        if (err) {
          //console.error('Erro ao inserir registros:', err);
          return callback(err);
        }
        console.log('Registros modificados com sucesso', err);
       callback(null) 
      });
      //conection.end()
};

module.exports = atulaizarAula;