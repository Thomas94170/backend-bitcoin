const mongoose = require("mongoose");
const accountSid = "AC2cf15e686a7ecb5bba53fd506ebfb131";
const authToken = "691385675299002dc5b0db0819c8d530";
const client = require("twilio")(accountSid, authToken);

const Infos = mongoose.model("./InfoSchema");

function getInfos() {
  return Infos.find({});
}

client.api.contacts;

getInfos().then((infos) => {
  infos.forEach((info) => {
    const pseudo = info.pseudo;
    const telephone = info.telephone;

    client.api.contacts
      .create({
        body: `Bonjour ${pseudo}, la valeur du Bitcoin est de XXX€`,
        from: "+1 862 244 1965",
        to: `${telephone}`,
      })
      .then((contact) => console.log(contact.sid));
  });
});
