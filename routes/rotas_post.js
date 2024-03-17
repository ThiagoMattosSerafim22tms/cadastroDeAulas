const express = require('express');
const router = express.Router();

const cadastraNovaAula = require('../bancoDeDados/insereAula')
//permite ler o corpo da mensagem
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));


router.post('/cadastro', (req, res)=>{
    const aluno = req.body.nome_aluno;
    const disciplina = req.body.disciplina;
    const dia = req.body.dia_aula;   
    const inicio = req.body.horario_inicio;
    const fim = req.body.horario_fim;
    const professor = req.body.nome_professor;

    console.log(aluno);
    
    cadastraNovaAula(professor,aluno,disciplina,dia,inicio,fim, (err) => {
        if (err) {
            console.log(err);
            let mensagem = `Aula de ${disciplina} do estudante  ${aluno} NÃO AGENDADA! Erro ${err}`; 
    return res.redirect(`http://localhost:4000/home/cadastro?mensagem=${encodeURIComponent(mensagem)}`)
 
        }else{
        
    let mensagem = `Aula de ${disciplina} do estudante  ${aluno} marcada para ${dia} de ${inicio} às ${fim} `; 
    res.redirect(`http://localhost:4000/home/cadastro?mensagem=${encodeURIComponent(mensagem)}`);}
 
    }
 
        
        );
    
});


module.exports = router