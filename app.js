/* eslint-disable linebreak-style */
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users.js');
const cardRouter = require('./routes/cards.js');

// app.use(express.static(path.join(__dirname, '/public')));

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use((req, res, next) => {
  req.user = {
    _id: '5f67e10f80ad2b4a78fabbaf', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRouter);
app.use('/', cardRouter);
app.all('/*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`Вы на порту ${PORT}`);
});