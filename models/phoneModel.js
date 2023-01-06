const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
  pseudo: String,
  require: true,
  telephone: String,
  require: true,
  unique: true,
  validate: {
    validator: function (v) {
      return /^(06|07)[0-9]{8}$/.test(v);
    },
    message: "{VALUE} is not a valid phone number!",
  },
});

module.exports = { InfoSchema };
