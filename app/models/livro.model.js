
module.exports = (sequelize, Sequelize) => {
    const Livro = sequelize.define("livro", {
      nome: {
        type: Sequelize.STRING,
      },
      autor: {
        type: Sequelize.STRING,
      },
      sinopse: {
        type: Sequelize.STRING,
      },
      datalancamento: {
        type: Sequelize.DATE,
      },
      dataaluguel: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.BOOLEAN,
      }
    });
    return Livro;
};
  