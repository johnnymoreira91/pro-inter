var app = require('./config/server');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/app/views/home/index.html');
});

app.get('/menuprincipal', function(req, res){
  res.sendFile(__dirname + '/app/views/menuprincipal/menuprincipal.html');
});

app.get('/construcao', function(req, res){
  res.sendFile(__dirname + '/app/views/construcao/construcao.html');
});

app.get('/addagenda', function(req, res){
  res.sendFile(__dirname + '/app/views/agenda/addagenda.html');
});

app.get('/paciente', function(req, res){
  res.sendFile(__dirname + '/app/views/paciente/cadastroPaciente.html');
});

app.get('/css/style.css', function(req, res){
  res.sendFile(__dirname + '/app/views/css/style.css');
});

app.get('/css/style1.css', function(req, res){
  res.sendFile(__dirname + '/app/views/css/style1.css');
});

app.get('/css/menuprincipal.css', function(req, res){
  res.sendFile(__dirname + '/app/views/css/menuprincipal.css');
});

app.get('/imagens/doc.jpg', function(req, res){
  res.sendFile(__dirname + '/app/views/imagens/doc.jpg');
});

app.listen(3000, function(){
    console.log('Servidor ON');
});


/*
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  */
