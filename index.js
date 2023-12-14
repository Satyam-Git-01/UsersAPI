const express = require("express");
require("dotenv").config();
const Config = require("./configs/config");
const { dbConnection } = require("./database/dbConn");
const userRoute = require("./routes/userRoute");
const app = express();
app.use(express.json())
dbConnection(Config.CONNECTION_STRING);
app.listen(Config.PORT_NUMBER, () => {
  console.log(`Url of app is http://localhost:${Config.PORT_NUMBER}/api/user`);
});

app.use("/api/user", userRoute);
