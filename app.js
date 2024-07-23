const express = require('express')
const cors = require("cors");
const app = express()
const fruitRouter = require("./route/fruitRouter")


app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.use(cors());
app.use(express.json());

app.use("/fruits", fruitRouter);


module.exports = app;