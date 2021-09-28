const path = require('path');

const cartController = {

  // méthode pour afficher le panier
  cartPage: (request, response) => {
    response.render('panier', {
      articleHtml: false,
      shouldIncludeCategory: false
    });  }

};


module.exports = cartController;
