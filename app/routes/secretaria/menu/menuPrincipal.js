module.exports = function(app){
    app.get('/menuprincipalsecretaria', function(req,res){
        res.render('secretaria/menuprincipal/menuprincipal')
    });
};