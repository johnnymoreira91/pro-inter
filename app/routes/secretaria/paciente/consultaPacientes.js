var dbConnection = require('../../../../config/dbConnection')
module.exports = function(app){

    var connection = dbConnection();

    app.get('/consultaPacientes', function(req,res){
        
        connection.query('select * from paciente', function(error, result){
            res.render('secretaria/paciente/consultaPaciente', {consultaAgenda : result});
            //res.send(result);
        })
    });
};