module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile('./app/views/home/index.html');
  });
}