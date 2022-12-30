const mongoose = require("mongoose");

const InfosModel = mongoose.model(
  "monBitCoin",
  {
    pseudo: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
  },
  "infos"
);

module.exports = { InfosModel };
