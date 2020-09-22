const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:
     {
       type: String,
       required: true,
       minlength: 2,
       maxlength: 30,
     },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    minlength: 2,
    validate: {
      validator(link) {
        return /https?:\/\/(www\.)?[a-zA-Z0-9-@#$%:._=+~&*\\]{1,333}\.[0-9A-Za-z]{1,4}\b([a-zA-Z0-9-@#$%:._=//()+~&*\\]*)/.test(link);
      },
      message: (props) => `${props.value} ссылка не прошла валидацию.`,
    },
  },
});

module.exports = mongoose.model('user', userSchema);