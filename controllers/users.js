/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */

const User = require('../models/user');

const getUser = (req, res) => {
  User.find({})
    .then((data) => { res.status(200).send({ data }); })
    .catch((err) => {
      const ERROR_CODE = 404;

      if (err.name === 'CastError') res.status(ERROR_CODE).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};

const getUserById = (req, res) => {
  User.findById(req.params._id)
    .then((data) => { res.status(200).send({ data }); })
    .catch((err) => {
      const ERROR_CODE = 404;

      if (err.name === 'CastError') res.status(ERROR_CODE).send({ message: 'пользователь не найден' });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      const ERROR_CODE = 400;

      if (err.name === 'CastError') res.status(ERROR_CODE).send({ message: 'переданы некорректные данные в метод создания пользователя' });
    });
};

module.exports = {
  getUser,
  getUserById,
  createUser,
};