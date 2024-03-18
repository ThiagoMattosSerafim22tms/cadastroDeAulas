function conectaBancoDeDados(){

    //cria uma instância mysql
    const mysql = require('mysql');
    //configura os parâmetros da conexão
    const conection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'horarioAulas'
    });

     //conecta ao banco de dados
     conection.connect((err) => {
        if (err) {
            console.error('Erro ao tentar se conectar ao banco de dados', err);
            return;
        }
        console.log('Conexão bem sucedida ao banco de dados')
    });

return conection
};

module.exports = conectaBancoDeDados;