const express = require('express');
const router = express.Router();
const excluirAula = require('../bancoDeDados/deletar_aula');
const visualizar_por_aluno = require('../bancoDeDados/visualizar_por_aluno');

//permite ler o corpo da mensagem
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

router.delete('/aula/:id/:aluno', (req, res)=>{
   
   const aula_id = req.params.id;
   const aluno = req.params.aluno;

   excluirAula(aula_id, (err)=>{
    if(err){
        console.log('Aula não excluída',err);
        let mensagem = `Aula ${aula_id} NÃO EXCLUÍDA! Erro ${err}`; 
        return res.redirect(`http://localhost:4000/home/cadastro?mensagem=${encodeURIComponent(mensagem)}`)
    
    }
   });
   
   console.log(`Aula ${aula_id} excluída do aluno ${aluno}`);
   
   visualizar_por_aluno(aluno,null, null, (err,result)=>{
    if(err){
        res.send(`Impossível listar ${aluno}`);
        return
    };
    const lista = result;
    const mensagem = `Aula ${aula_id} excluída.`

    res.render('index', {page_title: 'LISTA', descricao: 'LISTAGEM POR ALUNO', listas: lista, informacao: mensagem});
})

   
 
   
});


module.exports = router