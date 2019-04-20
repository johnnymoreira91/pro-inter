module.exports = function(app){
    app.get('/menuprincipalfisio', function(req,res){
        res.render('fisio/menuprincipal/menuprincipalfisio')
    });
};