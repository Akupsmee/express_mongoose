const router = require("express").Router()
const Todo = require("../models/todoModel")


router.post("/add/todo" ,(req, res)=>{
    const {todo} = req.body
    
    const newTodo = new Todo({todo})

    newTodo.save()
    .then(()=>{
        
        res.redirect("/")
    }).catch(err=>{
        console.log(err);
    })
 
})


router.get("/delete/todo/:id", (req, res)=>{
    const {id} = req.params

    Todo.deleteOne({_id :id})
    
    .then(()=>{
        res.redirect("/")
    }).catch(err=> console.log(err))
})





module.exports = router