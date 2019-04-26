var app = require('./config/server');
const endereco = 'localhost:';
const port = 3000;

//var rotalogin = require('./app/routes/login/login')(app);

app.listen(port, function(){
    console.log('Servidor rodando com express, nodemom, consign, ejs');
    console.log('Servidor Rodando em ', endereco,port);
})