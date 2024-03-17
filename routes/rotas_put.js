const express = require('express');
const router = express.Router();
const atualizarAula = require('../bancoDeDados/atulaizarAula');
const visualizar_por_aluno = require('../bancoDeDados/visualizar_por_aluno');
//permite ler o corpo da mensagem
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

router.use(express.json());



router.put('/aula/:id', (req, res)=>{
    

    const id = req.params.id;
    const aluno = req.body.alunoChave;
    const professor = req.body.professorChave;
    const data = req.body.dataChave;
    const inicio = req.body.inicioChave;
    const fim = req.body.fimChave;
    

    atualizarAula(id, aluno,professor,data,inicio,fim, (err) => {
        if (err) {
            console.log(err);
            let mensagem = `Aula NÃO ATUALIZADA! Erro ${err}`; 
    return res.redirect(`http://localhost:4000/home/cadastro?mensagem=${encodeURIComponent(mensagem)}`)
 
        }})
        console.log(`Aula ${id} atualizada!`);
  
        visualizar_por_aluno(aluno,null, null, (err,result)=>{
            if(err){
                res.send(`Impossível listar ${aluno}`);
                return
            };
            const lista = result;
       const mensagem = `Aula ${id} modificada com sucesso!`
            res.render('index', {page_title: 'LISTA', descricao: 'LISTAGEM POR ALUNO', 
            listas: lista, informacao: mensagem });
        })
        
        


    
});



module.exports = router