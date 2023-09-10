const { getAll, create, getOne, remove, update } = require("../controllers/todo.controllers");
const express = require('express')



const routerTodo = express.Router();


routerTodo.route('/')

.get(getAll)
.post(create)

routerTodo.route('/:id')
.get(getOne)
.delete(remove)
.put(update)

module.exports = routerTodo;
