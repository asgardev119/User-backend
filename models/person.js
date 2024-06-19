const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },

  work: {
    type: String,
    require: true,
    enum: ["chef", "waiter", "manager"],
  },
  mobile: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
  },
  salary: {
    type: String,
    require: true,
  },
  address: {
    type: String,
  },
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;


