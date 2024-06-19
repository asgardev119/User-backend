const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser"); //it is middleware---
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("welcome to hotel");
});

app.use("/person", personRoutes);
app.use("/menuitem", menuRoutes);

app.listen(PORT, () => {
  console.log("server is runnig on port 3000");
});
