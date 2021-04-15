
const db = require("../models");

Livro = db.livros;
const Op = db.sequelize.Op; 

exports.create = (req,res)=>{

    const livro = {
        nome: req.body.nome,
        autor: req.body.autor,
        sinopse: req.body.sinopse,
        datalancamento: req.body.datalancamento,
        dataaluguel: req.body.dataaluguel,
        status: req.body.status ? req.body.status : false
    }
    Livro.create(livro)
    .then((data)=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Erro interno ao criar o livro"
        });
    });
};

