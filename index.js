const express = require("express");
require("dotenv").config();
const Config = require("./configs/config");
const app = express();
app.listen(Config.PORT_NUMBER, () => {
  console.log(`Url of app is http://localhost:${Config.PORT_NUMBER}`);
});

app.get('/',(request,response)=>{
    return response.send('Hello!!!!!')
})
