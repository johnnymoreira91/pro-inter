var dbConnection = require('../../../../config/dbConnection')
module.exports = function(app){

 //   var connection = app.config.dbConnection(); //dbConnection();

    app.get('/consultaPacientes', function(req,res){

        var connection = app.config.dbConnection();
        
        connection.query('select * from paciente', function(error, result){
            res.render('secretaria/paciente/consultaPaciente', {consultaAgenda : result});
            //res.send(result);
        })
    });
};