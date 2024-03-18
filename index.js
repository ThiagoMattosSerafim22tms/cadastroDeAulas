//inicia uma instância do express
const express = require('express');
const app = express();
//pastas das rotas modularizadas
const rotas_get = require('./routes/rotas_get');
const rotas_post = require('./routes/rotas_post');
const rotas_delete = require('./routes/rotas_delete');
const rotas_put = require('./routes/rotas_put');
//configura o servidor
const host = 'localhost';
const port = 4000;
//configura a renderização
app.set('views', './views');
app.set('view engine', 'ejs');
//indica as rotas modularizadas
app.use( '/home', rotas_get);
app.use( '/acoes', rotas_post);
app.use( '/deletar', rotas_delete);
app.use( '/atualizar', rotas_put);


app.listen(port, host, ()=>{
    console.log(`Servidor rodando em http://${host}:${port}/home`)
})


