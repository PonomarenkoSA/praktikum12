const cardsRouter = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

cardsRouter.get('/', (req, res) => {
  const cardsPath = path.join(__dirname, '../data/cards.json');
  fsPromises
    .readFile(cardsPath, { encodinng: 'utf8' })
    .then((data) => {
      const cards = JSON.parse(data);
      res.send(cards);
    })
    .catch(() => {
      res.status(500).send({ message: 'Error getting data' });
    });
});

module.exports = cardsRouter;
