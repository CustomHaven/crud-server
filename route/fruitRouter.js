const express = require("express");
const fruitRouter = express.Router();
const fruits = require("../controllers/fruits");

fruitRouter.get("/", fruits.index);
// READ - GET - READ - STATIC
fruitRouter.get("/:name", fruits.show);

// CREATE - POST - CREATE - STATIC
fruitRouter.post("/", fruits.create);

// UPDATE - PATCH - UPDATE - INSTANT
fruitRouter.patch("/:name", fruits.update);

// DELETE - DELETE - DESTROY - INSTANT
fruitRouter.delete("/:name", fruits.destroy);

module.exports = fruitRouter;