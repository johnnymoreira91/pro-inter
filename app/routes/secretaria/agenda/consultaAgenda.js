var dbConnection = require('../../../../config/dbConnection')
module.exports = function(app){

    var connection = dbConnection();

    app.get('/consultaagendasecretaria', function(req,res){
        /*
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '1234',
            database : 'prointer'
        });
    */

   var connection = app.config.dbConnection();

        connection.query('select a.id_agenda, a.id_paciente, a.horario, a.dia, a.exercicio, p.nome from agenda a inner join paciente p on a.id_paciente = p.id_paciente', 
        function(error, result){
            res.render('secretaria/agenda/consultaagenda', {consultaAgenda : result});
            //res.send(result);
        })

       // res.render('secretaria/agenda/consultaagenda');
    });
};