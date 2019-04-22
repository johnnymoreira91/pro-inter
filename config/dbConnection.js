var mysql = require('mysql');



module.exports = function(){
    console.log('INICIADO CONEXAO');
    /*var connection =*/ return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'prointer'
    });
};