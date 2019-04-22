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
        connection.query('select agenda.id_paciente, agenda.horario, agenda.dia, paciente.id_paciente, paciente.nome from agenda, paciente', function(error, result){
            res.render('secretaria/agenda/consultaagenda', {consultaAgenda : result});
            //res.send(result);
        })

       // res.render('secretaria/agenda/consultaagenda');
    });
};