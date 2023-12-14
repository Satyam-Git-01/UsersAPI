const Mongoose = require("mongoose");
const dbConnection = (connectionString) => {
  Mongoose.connect(connectionString)
    .then((response) => {
      console.log("Database Connection Successfull");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  dbConnection,
};
