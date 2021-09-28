const path = require('path');
const dataMapper = require ('../datamapper');

const mainController = {

  // méthode pour la page d'accueil
  homePage: (request, response) => {
    dataMapper.getAllFigurines((figurines)=>{
      response.render('accueil', {
        articleHtml: false,
        shouldIncludeCategory: true,
        figurines: figurines
      });
    })
  },

  // méthode pour la page article
  articlePage: (request, response) => {
    const id = request.params.id;

    dataMapper.getOneFigurine(id, (figurine)=>{
      response.render('article', {
        articleHtml: true,
        shouldIncludeCategory: true,
        figurine: figurine
      });
    } )
  },

};


module.exports = mainController;
