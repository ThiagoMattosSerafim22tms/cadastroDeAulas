const express = require('express');
const router = express.Router();
const visualizar_aulas = require('../bancoDeDados/visualizar_aulas');
const visualizar_por_aluno = require('../bancoDeDados/visualizar_por_aluno');
//permite ler o corpo da mensagem
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res)=>{
    res.render('index', {page_title: 'HOME ', descricao: 'PÁGINA INICIAL', listas: [], informacao:''});
});

router.get('/quadro', (req, res)=>{
    
    res.render('quadro', {page_title: 'QUADRO', descricao: 'QUADRO DE AULAS AGENDADAS'});
}); 

router.get('/cadastro', (req, res)=>{
    const mensagem = req.query.mensagem;
    res.render('cadastro', {page_title: 'CADASTRO', descricao: 'CADASTRO DE AULAS', informacao: mensagem});
}); 

//get todas as aulas
router.get('/listagem/:di/:df', (req, res)=>{
const inicio = req.params.di;
const fim = req.params.df;

     visualizar_aulas(inicio, fim, (err,result)=>{
        if(err){
            res.send('Impossível listar');
            return
        };
        const lista = result;

        const mensagem = `Aulas de ${inicio} a  ${fim}`; 

        res.render('index', {page_title: 'HOME', descricao: 'CADASTRO DE AULAS', listas: lista, informacao: mensagem});
    })

}); 
//get por aluno
router.get('/listageral/nome/:nomealuno/:di/:df', (req, res)=>{
    const inicio = req.params.di;
    const fim = req.params.df;   
    const aluno = req.params.nomealuno;
    console.log('busca por aluno')


    visualizar_por_aluno(aluno,inicio, fim, (err,result)=>{
       if(err){
           res.send(`Impossível listar ${aluno}`);
           return
       };
       const lista = result
       const mensagem = `Aulas do aluno ${aluno} entre ${inicio} e ${fim}`; 

       res.render('index', {page_title: 'LISTA', descricao: 'LISTAGEM POR ALUNO', listas: lista, informacao: mensagem});
   })

}); 

module.exports = router