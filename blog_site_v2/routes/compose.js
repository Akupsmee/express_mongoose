const router = require("express").Router()
const Blog = require("../models/blog")


router.get("/compose",(req, res)=>{
    
    res.render("composeBlog")
})


router.post("/compose", async (req, res)=>{

    const {title, content} = req.body
    //!  check for missing fields
    if(!title || !content) return res.send("Please fill the required fields!")

    const newBlog =  new Blog ({ title, content})

    // ! save blog to database
    newBlog.save()

    .then (()=>{
        console.log(newBlog);
        res.redirect("/")
    }).catch(err => console.log(err))


})

module.exports =router