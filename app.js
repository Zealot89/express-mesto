/* eslint-disable linebreak-style */
const express = require('express');

const app = express();

const path = require('path');
const userRouter = require('./routes/users.js');
const cardRouter = require('./routes/cards.js');

app.use(express.static(path.join(__dirname, '/public')));

const { PORT = 3000 } = process.env;

app.use('/', userRouter);
app.use('/', cardRouter);
app.all('/*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`Вы на порту ${PORT}`);
});