module.exports = function(app){
    app.get('/construcaos', function(req,res){
        res.render('secretaria/construcao/construcao');
    });
};