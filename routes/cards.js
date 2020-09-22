const cardsRouter = require('express').Router();
const {
  getCard,
  addCard,
  deleteCard,
} = require('../controllers/cards');

cardsRouter.get('/cards', getCard);
cardsRouter.post('/cards', addCard);
cardsRouter.delete('/cards/:cardId', deleteCard);

module.exports = cardsRouter;