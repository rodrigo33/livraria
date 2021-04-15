
module.exports = app => {
    const livros = require("../controllers/livro.controller");

    var router = require ("express").Router();

    //cria novo livro
    router.post("/", livros.create);
    

    app.use('/api/livros', router);
}
