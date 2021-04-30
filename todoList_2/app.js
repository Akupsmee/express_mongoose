const express = require ("express")
const mongoose = require ("mongoose")

const app = express()


// ! middleware
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs")

// ! connection to mongodb
mongoose.connect("mongodb://localhost:27017/TODOV2", { useNewUrlParser: true ,  useUnifiedTopology: true })




// ! routes
app.use(require("./routes/index"))
app.use(require("./routes/todos"))


app.listen(8080, (req,res)=>{
    console.log("welcome on board sever 8080 is running");
})