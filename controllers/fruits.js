const Fruit = require("../models/Fruit");

const index = async (req, res) => {
  // showAll
  try {
    console.log("SDA")
    const fruits = await Fruit.showAll();
    res.status(200).send(fruits);      
  } catch (err) {
    res.status(404).send({ error: err });
  }
}


const show = async (req, res) => {
  // Consoder dealing with capital letters vs no capital letters in the user input
  const name = req.params.name.toLowerCase();
  // If it exists, we want to send it back to the client
  try {
    const fruit = await Fruit.show(name);
    res.status(200).send(fruit);    
  } catch (err) {
    // If it doesnt exist we send to send an error - 404
    res.status(404).send({ error: err });
  }

}

const create = async (req, res) => {
  const data = req.body;
  try {
    // 1. Call method from the model
    const newFruit = await Fruit.create(data);
    // 2. Send a response with a status code and the new element
    res.status(201).send(newFruit);
  } catch (error) {
    res.status(409).send({ error: error });    
  }
}

const update = async (req, res) => {
  const name = req.params.name.toLowerCase();
  const data = req.body;
  try {
    const fruit = await Fruit.show(name);
    const updatedFruit = await fruit.update(data);
    
    res.status(200).send(updatedFruit);
  } catch (error) {
    res.status(404).send({ error: error });
  }
}

const destroy = async (req, res) => {
  const name = req.params.name.toLowerCase();
  try {
    const fruit = await Fruit.show(name);
    // console.log("fr", fruit)
    const destroyed = await fruit.destroy(fruit);

    res.status(200).send(destroyed);
    
    // res.end()
  } catch (error) {
    res.status(404).send({ error: error });
  }
}


module.exports = {
  index, show, create, update, destroy
}