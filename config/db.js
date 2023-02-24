const mongoose = require("mongoose");
const dbConfig = require("./dbconfig");

const connectDb = async () => {
  try {
    await mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(
      dbConfig.database,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
