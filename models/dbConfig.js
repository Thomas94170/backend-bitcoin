const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Thomas:thomas1985@cluster0.qfmzcuu.mongodb.net/monBitCoin",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("MongoDB connecté");
    else console.log("Erreur de connection " + err);
  }
);
