module.exports = function(app){
    app.get('/consultaagendafisio', function(req,res){
        res.render('fisio/agenda/consultaagenda')
    });
};