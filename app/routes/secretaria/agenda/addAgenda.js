module.exports = function(app){
    app.get('/addagendasecretaria', function(req,res){
        res.render('secretaria/agenda/addagenda');
    });
};