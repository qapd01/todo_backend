const express = require ('express');

const router = express.Router();

//Get all todoList
router.get('/',(req,res) =>{
    res.send("Get all TodoLists")
})

//Get 1 todoList
router.get('./:todoId',(req,res) =>{
    res.send("Get 1 TodoList")
})

//Post todoList
router.post('/',(req,res) =>{
    res.send("Post TodoList")
})

//Put todolist
router.put('./:todoId',(req,res) =>{
    res.send("Update TodoList")
})

//Delete todoList
router.delete('./:todoId',(req,res) =>{
    res.send("delete TodoList")
})

module.exports = router;