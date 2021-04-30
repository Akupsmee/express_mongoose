const mongoose = require ("mongoose")
const express = require("express")
const app = express()

// ! mongoose config
mongoose.connect("mongodb://localhost:27017/myBlog", {useNewUrlParser:true, useUnifiedTopology: true}, ()=>{
    console.log("successfully connected to MongoDB database");
})


//!  middlewares 

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


// ! routes
app.use(require("./routes/index"))
app.use(require("./routes/compose"))
app.use(require("./routes/readMore"))


// ! variable assignment







// ! server configurations
app.listen(7000, (req, res)=>{
    console.log("listening on port 7000");
})