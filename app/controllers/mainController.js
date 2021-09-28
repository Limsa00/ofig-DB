const path = require('path');

const mainController = {

  // méthode pour la page d'accueil
  homePage: (request, response) => {
    response.render('accueil', {
      articleHtml: false,
      shouldIncludeCategory: true
    });
  },

  // méthode pour la page article
  articlePage: (request, response) => {
    response.render('article', {
      articleHtml: true,
      shouldIncludeCategory: true
    });
  },

};


module.exports = mainController;