const express = require('express');
const routerTodo = require('./todo.route');
const router = express.Router();


// colocar las rutas aquí
router.use('/todos', routerTodo )

module.exports = router;