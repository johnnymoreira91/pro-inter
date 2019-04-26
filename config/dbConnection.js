var mysql = require('mysql');

var connMysql = function(){
	console.log('Conexao Com BD estabelecida');
	 return mysql.createConnection({
			host : 'localhost',
	        user : 'root',
	        password : '1234',
	        database : 'prointer'
		});

}

module.exports = function(){
	console.log('Modulo mysql Carregado');
		return connMysql;

		/*var connection = */ /*return mysql.createConnection({
			host : 'localhost',
	        user : 'root',
	        password : '1234',
	        database : 'portal_noticias'
		}); */
	};


/*

var mysql = require('mysql');



module.exports = function(){
    console.log('INICIADO CONEXAO');
    /*var connection =*/ /*return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'prointer'
    });
}; */