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

userRouter.use('/users/:_id', (req, res) => {
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








//usersRouter.get('/users', (req, res) => {
//    fs.readFile(usersFile, { encoding: 'utf8' }, (err, data) => {
//      const newData = JSON.parse(data);
//  
//      if (err) {
//        res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
//        return;
//      }
//  
//      res.send(newData);
//    });
//  });