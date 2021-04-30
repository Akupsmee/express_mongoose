const router = require("express").Router()
const Todo = require("../models/todoModel")

//  ! routes goes here 

router.get("/", async (req, res)=>{
   const allTodos = await Todo.find()

    res.render("index", {todos: allTodos})
})



module.exports = router