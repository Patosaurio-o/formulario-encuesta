const { Router } = require('express');
const router = Router();

router.get('/', (req,res) => {
  res.render('index');
});

router.post('/', (req,res) => {
  res.render("index", {
    nombre : req.body.name,
    ubicacion : req.body.ubicacion,
    lenguaje : req.body.lenguaje,
    comentario : req.body.comentario
  });
});

module.exports = router;