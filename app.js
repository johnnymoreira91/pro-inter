var app = require('./config/server');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/app/views/home/index.html');
});

app.get('/menuprincipalsecretaria', function(req, res){
  res.sendFile(__dirname + '/app/views/secretaria/menuprincipal/menuprincipal.html');
});

app.get('/construcaos', function(req, res){
  res.sendFile(__dirname + '/app/views/secretaria/construcao/construcao.html');
});

app.get('/addagendasecretaria', function(req, res){
  res.sendFile(__dirname + '/app/views/secretaria/agenda/addagenda.html');
});

app.get('/consultaagendasecretaria', function(req, res){
  res.sendFile(__dirname + '/app/views/secretaria/agenda/consultaAgenda.html');
});

app.get('/addpacientesecretaria', function(req, res){
  res.sendFile(__dirname + '/app/views/secretaria/paciente/cadastroPaciente.html');
});

app.get('/abouts', function(req, res){
  res.sendFile(__dirname + '/app/views/secretaria/about/about.html');
});


// -------------------- ACIMA FINALIZA MENU SECRETARIA ------------------------ //

app.get('/menuprincipalfisio', function(req, res){
  res.sendFile(__dirname + '/app/views/fisio/menuprincipal/menuprincipalfisio.html');
});

app.get('/aboutf', function(req, res){
  res.sendFile(__dirname + '/app/views/fisio/about/about.html');
});

app.get('/construcaof', function(req, res){
  res.sendFile(__dirname + '/app/views/fisio/construcao/construcao.html');
});

app.get('/consultaagendafisio', function(req, res){
  res.sendFile(__dirname + '/app/views/fisio/agenda/consultaAgenda.html');
});

// -------------------- ACIMA FINALIZA MENU FISIO ------------------------ //

app.get('/css/style.css', function(req, res){
  res.sendFile(__dirname + '/app/views/css/style.css');
});

app.get('/css/style1.css', function(req, res){
  res.sendFile(__dirname + '/app/views/css/style1.css');
});

app.get('/css/menuprincipal.css', function(req, res){
  res.sendFile(__dirname + '/app/views/css/menuprincipal1.css');
});

// ---------------- FIM IMAGENS -------------- //

app.get('/imagens/doc.jpg', function(req, res){
  res.sendFile(__dirname + '/app/views/imagens/doc.jpg');
});

app.get('/imagens/construcao.jpg', function(req, res){
  res.sendFile(__dirname + '/app/views/imagens/construcao.jpg');
});


// ---------------- FIM IMAGENS -------------- //

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
