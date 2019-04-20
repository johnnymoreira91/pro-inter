module.exports = function(app){
    app.get('/addpacientesecretaria', function(req,res){
        res.render('secretaria/paciente/cadastropaciente');
    });
};