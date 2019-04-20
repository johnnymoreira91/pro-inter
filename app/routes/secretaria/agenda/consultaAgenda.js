module.exports = function(app){
    app.get('/consultaagendasecretaria', function(req,res){
        res.render('secretaria/agenda/consultaagenda');
    });
};