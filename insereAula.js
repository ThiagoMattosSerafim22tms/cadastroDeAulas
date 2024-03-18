//const { json } = require('body-parser');
const conectaBancoDeDados = require('./conexao');
const conection = new conectaBancoDeDados();
//const Aula = require('../tratamento_de_dados/construtor_aula');


const cadastraNovaAula=(professor,aluno,disciplina,dia,inicio,fim, callback)=>{

//var novaAula= new Aula(professor, nome,disciplina,dia,inicio,fim);

    conection.query(`INSERT INTO aulas_agendadas (professor, disciplina, aluno, data, inicio, fim) 
    VALUES (?,?,?,?,?,?)`,
     [professor, disciplina, aluno, dia,inicio,fim], (err, result) => {
        if (err) {
          //console.error('Erro ao inserir registros:', err);
          return callback(err);
        }
        console.log('Registros inseridos com sucesso', err);
       callback(null) 
      });
      //conection.end()
};

module.exports = cadastraNovaAula;