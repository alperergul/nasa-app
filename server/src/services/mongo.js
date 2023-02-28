const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URL =
  "mongodb+srv://" +
  process.env.USER_NAME +
  ":" +
  process.env.PASSWORD +
  "@cluster0.pzrta9k.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
