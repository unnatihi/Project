const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
    // Call initDB to reinitialize data after connecting to the database
    initDB();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  // Remove all documents from the Listing model
  await Listing.deleteMany({});
  // Insert new data from initData.data
  await Listing.insertMany(initData.data);
  console.log("Data was reinitialized");
};
