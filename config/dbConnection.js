var mysql = require('mysql');

var connMysql = function(){
	console.log('Conexao Com BD estabelecida');
	 return mysql.createConnection({
			host : 'localhost',
	        user : 'root',
	        password : '1234',
	        database : 'portal_noticias'
		});

}

module.exports = function(){
	console.log('Iniciado mysql');
		return connMysql;

	};