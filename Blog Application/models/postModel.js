const mongoose = require("mongoose");

const postSchema= new mongoose.Schema({
 
    title:{
        type:String,
        required:true,
    }, 
    body:{
        type:String,
        required:true,
    },
    likes: [{ //likes array [ ] . because multiple likes rae there
        type:mongoose.Schema.Types.ObjectId, //get id  of post
        ref:"Like",  // refernce of Schema model
    }],
    Comments: [{ //comments array [ ]. 
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment", //reference of Comments model
    }]

});

module.exports = mongoose.model("Post",postSchema)