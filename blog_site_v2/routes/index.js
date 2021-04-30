const router = require("express").Router()
const Blog = require("../models/blog")




router.get("/", async (req,res)=>{
    const allBlogs = await Blog.find()
    res.render("index", {allBlogs}) // ! since the key and value has thesame name we can just use a single name for both e.g {a:a} = {a}.
})










module.exports = router