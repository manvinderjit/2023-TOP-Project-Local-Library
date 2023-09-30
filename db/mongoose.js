const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/local-library";

async function main() {
  await mongoose.connect(mongoDB);
  console.log("Database connection successful");
}

module.exports = main;
