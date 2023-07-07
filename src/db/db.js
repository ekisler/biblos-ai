const mongoose = require("mongoose");
require("dotenv").config();

// Conexión a la base de datos
const database = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Registers connected to DB!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
