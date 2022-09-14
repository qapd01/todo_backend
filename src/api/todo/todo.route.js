const express = require('express')

const router = express.Router();


const {getAllTodo,getTodo,createTodo,updateTodo,deleteTodo} = require('./todo.controller')

//Get all todoLists
router.get('/', getAllTodo)
// Get 1 todoList
router.get('/:todoListId',getTodo )
//Post todoList
router.post('/', createTodo)
//Update TodoList
router.put('/:todoListId', updateTodo)
//delete TodoList
router.delete('/:todoListId',deleteTodo )

module.exports = router;