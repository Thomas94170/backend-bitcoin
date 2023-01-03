const bodyParser = require("body-parser");
const express = require("express");
const app = express();

require("./models/dbConfig");

const infosRoutes = require("./routes/infosController");
const BodyParser = require("body-parser");
//const cors = require("cors");

app.use(bodyParser.json());
//app.use(cors());
app.use("/", infosRoutes);

app.listen(5500, () => console.log("server lancé: 5500"));

//react-scripts start
