var dbConnection = require('../../../../config/dbConnection');

module.exports = function(app){
    app.get('/addpacientesecretaria', function(req,res){
        res.render('secretaria/paciente/cadastropaciente');
    });

    app.post('/addpacientesecretaria/salvar', function(req,res){

        var connection = app.config.dbConnection();
        connection.query('insert into paciente(nome, data_nascimento, telefone, endereco, cep, cpf, usuario, senha) values (?,?,?,?,?,?,?,?', function(error, result){
            var addCliente = req.body;
            res.send(addCliente);
        })

        //var addCliente = req.body;
      // res.render('secretaria/paciente/cadastropaciente');
      // res.send(addCliente);
    });

};