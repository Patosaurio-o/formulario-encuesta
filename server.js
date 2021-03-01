const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

app.use(session({secret: 'mipropiaclave'}));  
app.use(flash());

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/'));

app.use(require('./routes/microtic'));


const server = app.listen(8000, () =>
console.log(`el server esta usando el puerto: ${server.address().port}!`)
);

const io = require('socket.io')(server);

io.on('connection', function (socket) {
  const num = Math.floor(Math.random()*1000);
  socket.on('DataReq', function (data) { 
    socket.emit('DataSend', {info:data});
    console.log(data); 
  }); 
  socket.emit('numRandom', {
    msg: `Tu número aleatorio es: ${num}`
})
  socket.emit('mensaje');
});