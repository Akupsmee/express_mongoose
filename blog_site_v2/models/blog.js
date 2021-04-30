const mongoose = require("mongoose")
// const { options } = require("../routes")




const blogSchema = new mongoose.Schema ({
    title:{
        type: String,
        required : true
    },
    content:{
        type: String,
        required: true
    },
    postedOn: {
        type: Date,
        default: new Date()
    }

})
 
const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog