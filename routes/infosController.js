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
  //cryptage numéro de téléphone
  const saltRounds = 10;

  const phoneNumber = req.body.telephone; //ici je récup le numéro de téléphone que je rentre dans mon input

  bcrypt.hash(phoneNumber, saltRounds, function (err, hash) {
    if (err) {
      throw err; // TODO : handle error; https://expressjs.com/en/guide/error-handling.html
    }
    const hashedPhoneNumber = hash;

    const newRecord = new InfosModel({
      pseudo: req.body.pseudo,
      telephone: hashedPhoneNumber,
    });

    newRecord.save((err, docs) => {
      if (!err) {
        return res.send(docs);
      }

      console.log("erreur dans la création de la data " + err);
      throw err; // TODO handle error: https://expressjs.com/en/guide/error-handling.html
    });
  });
});

module.exports = router;
