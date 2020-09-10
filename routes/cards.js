const fs = require('fs');
const path = require('path');
const cardsRouter = require('express').Router();

const cards = path.join('./data/cards.json');

cardsRouter.get('/cards', (req, res) => {
    fs.readFile(cards, { encoding: 'utf8' }, (e, data) => {
        const dataCards = JSON.parse(data);
        if (e) {
            res.status(404).send({ message: "Запрашиваемый ресурс не найден" });
            return
        }
        res.send(dataCards);
    })
});



module.exports = cardsRouter;