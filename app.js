const express = require('express')
const app = express()
const fruitRouter = require("./route/fruitRouter")


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(express.json());

app.use("/fruits", fruitRouter);


module.exports = app;