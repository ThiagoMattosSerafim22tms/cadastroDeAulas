const conectaBancoDeDados = require('./conexao');
const conection = new conectaBancoDeDados();

const excluirAula=(id, callback)=>{


    conection.query(`DELETE FROM aulas_agendadas WHERE id = ? `, [`${id}`], (err, result) => {
        if (err) {
          //console.error('Erro ao inserir registros:', err);
          return callback(err);
        }
        console.log('Registros excluídos com sucesso', err);
       callback(null) 
      });
   //  conection.end()
};

module.exports = excluirAula;