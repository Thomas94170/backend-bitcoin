const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const { InfosModel } = require("../models/infosModel");

router.get("/getInfos", (req, res) => {
  InfosModel.find((err, docs) => {
    // console.log(docs);
    if (!err) res.send(docs);
    else console.log("erreur dans la data" + err);
  });
});

router.post("/infos", (req, res) => {
  const newRecord = new InfosModel({
    pseudo: req.body.pseudo,
    telephone: req.body.telephone,
  });

  //cryptage numéro de téléphone
  const saltRounds = 10;

  const phoneNumber = req.body.telephone; //ici je récup le numéro de téléphone que je rentre dans mon input

  bcrypt.hash(phoneNumber, saltRounds, function (err, hash) {
    // Enregistrer le hash dans la base de données
  });
  //instancier avant le save afin que le num s'enregistre crypté

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("erreur dans la création de la data " + err);
  });
});

module.exports = router;
