module.exports = function(app){
    app.get('/aboutf', function(req,res){
        res.render('fisio/about/about');
    });
};