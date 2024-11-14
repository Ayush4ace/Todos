const express = require("express");

const router  = express.Router();

const {getTodos, createTodo, updateTodo, deleteTodo} = require("../controller/todo.controller.js");

router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);




module.exports = router;