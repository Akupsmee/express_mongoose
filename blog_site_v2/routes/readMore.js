const router = require("express").Router()
const Blog = require("../models/blog")


router.get("/blog/:id", async (req,res)=>{
    const {id} = req.params
    const singleBlog = await Blog.findOne({_id :id})

    res.render("specific", {singleBlog}) 
    // ! since the key and value has thesame name we can just use a single name for both e.g {a:a} = {a}.

})

router.get("/delete/:id", (req,res)=>{
    const {id} = req.params
    Blog.deleteOne({_id : id})

    .then(()=>{
        console.log("deleted one");
        res.redirect("/")
    }).catch(err=>{console.log(err);})
    
})


router.get("/edit/:id", async (req,res)=>{
    const {id} = req.params
    const editBlog =  await Blog.findOne({_id : id})

    res.render("edit", {Blog : editBlog}) 
    
})


router.post("/edit/:id",  (req,res)=>{
    const {id} = req.params
    console.log(req.params);
    const {title, content} = req.body
    Blog.updateOne({_id : id}, {title, content})

    .then(()=>{
        res.redirect("/")
    }).catch(err=>{
        console.log(err);
    }) 
    
})



module.exports = router