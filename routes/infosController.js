const express = require("express");
const router = express.Router();

const { InfosModel } = require("../models/infosModel");

router.get("/", (req, res) => {
  InfosModel.find((err, docs) => {
    // console.log(docs);
    if (!err) res.send(docs);
    else console.log("erreur dans la data" + err);
  });
});

router.post("/", (req, res) => {
  const newRecord = new InfosModel({
    pseudo: req.body.pseudo,
    telephone: req.body.telephone,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("erreur dans la création de la data " + err);
  });
});

module.exports = router;
