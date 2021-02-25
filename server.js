const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get('/', (req,res) => {
  res.render('index');
});

app.post('/result', (req,res) => {
  const info = req.body;
  console.log(info);
  res.render("result", {
    nombre : req.body.name,
    ubicacion : req.body.ubicacion,
    lenguaje : req.body.lenguaje,
    comentario : req.body.comentario
  });
});

const server = app.listen(8000, () =>
console.log(`el server esta usando el puerto: ${server.address().port}!`)
);