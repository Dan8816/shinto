const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const PORT = 8816;

app.use(bodyParser.json());
app.use(express.static( __dirname + '/client/dist/client' ));
app.set("views", path.join(__dirname, "./views"));
app.set('trust proxy', 1) 
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
  });


require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`);
})