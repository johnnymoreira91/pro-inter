module.exports = function(app){
    app.get('/abouts', function(req,res){
        res.render('secretaria/about/about');
    });
};