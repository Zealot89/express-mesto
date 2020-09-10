const fs = require('fs');
const path = require('path');
const userRouter = require('express').Router();

const users = path.join('./data/users.json');

userRouter.get('/users', (req, res) => {
    fs.readFile(users, { encoding: 'utf8' }, (e, data) => {
        const dataUser = JSON.parse(data);
        if (e) {
            console.log('Ошибка в юзерРоутер');
            return;
        }
        res.send(dataUser);
    });

});

userRouter.get('/users/:_id', (req, res) => {
    fs.readFile(users, { encoding: 'utf8' }, (e, data) => {
        const dataUser = JSON.parse(data);
        if (e) {
            res.status(404).send({ message: "Запрашиваемый ресурс не найден" });
            return;
        }
        const userById = dataUser.find((i) => i._id === req.params._id)
        if (!userById) {
            res.status(404).send({ message: 'Нет пользователя с таким id' });
            return;
        }
        res.send(userById);
    })
})
module.exports = userRouter;
