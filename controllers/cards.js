/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */

const Card = require('../models/card');

const getCard = (req, res) => {
  Card.find({})
    .then((data) => { res.status(200).send({ data }); })
    .catch((err) => {
      const ERROR_CODE = 404;

      if (err.name === 'CastError') res.status(ERROR_CODE).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};

const addCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({
    name, link, owner: req.user._id,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send({ message: 'переданы некорректные данные в метод создания карточки' });
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      res.status(400).send({ message: 'переданы некорректные данные в метод удаления карточки' });
    });
};

module.exports = {
  getCard,
  addCard,
  deleteCard,
};