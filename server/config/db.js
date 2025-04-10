const mongoose = require("mongoose");

//driver
const dbURL = process.env.DB_URL;
console.log(dbURL);

//Once
const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("connected to database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
