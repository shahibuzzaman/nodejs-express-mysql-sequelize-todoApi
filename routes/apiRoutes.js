const express = require("express");
const router = express.Router();
const db = require("../models");

//get all todos
router.get("/todos", (req, res) => {
  db.Todo.findAll().then((todos) => res.send(todos));
});

//get single todo by id
router.get("/todos/:id", (req, res) => {
  db.Todo.findAll({
    where: {
      id: req.params.id,
    },
  }).then((todo) => res.send(todo));
});

//post new todo
router.post("/todos", (req, res) => {
  db.Todo.create({
    name: req.body.name,
    description: req.body.description,
  }).then((submittedTodo) => res.send(submittedTodo));
});

//delete todo
router.delete("/todos/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("one item deleted."));
});

//update todo
router.put("/todos", (req, res) => {
  db.Todo.update(
    {
      name: req.body.name,
      description: req.body.description,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then(() => res.send("Updated Successfully."));
});

module.exports = router;
