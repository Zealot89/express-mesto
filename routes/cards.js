const fs = require('fs');
const path = require('path');
const cardsRouter = require('express').Router();

const cards = path.join('./data/cards.json');

cardsRouter.use('/cards', (req, res) => {
    fs.readFile(cards, { encoding: 'utf8' }, (e, data) => {
        const dataCards = JSON.parse(data);
        if (e) {
            console.log('Ошибка в роутере Кардс');
            return
        }
        res.send(dataCards);
    })
});



module.exports = cardsRouter;