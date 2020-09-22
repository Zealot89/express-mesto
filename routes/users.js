/* eslint-disable no-underscore-dangle */
const userRouter = require('express').Router();
const {
  getUser,
  getUserById,
  createUser,
} = require('../controllers/users');

userRouter.get('/users', getUser);
userRouter.get('/users/:_id', getUserById);
userRouter.post('/users', createUser);

module.exports = userRouter;