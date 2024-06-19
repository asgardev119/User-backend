const mongoose = require("mongoose");
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL;


mongoose.connect(mongoURL, {
  //   useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const db = mongoose.connection;

//db is object which is use to intrect and handle event with databse.
// define event listeners for dataBase connection
db.on("connected", () => {
  console.log("database connected on server");
});

// db.on("error", (error) => {
//   console.log("database connection error", error);
// });

// db.on("disconnected", () => {
//   console.log("mongoDB disconnected");
// });

module.exports = db;
