//import mongoose
const mongoose=require("mongoose");


//route handler
const commentSchema=new mongoose.Schema(
    {

        post:{
            type:mongoose.Schema.Types.ObjectId,  //get id of post
            ref:"Post", //reference to post model because we want id of post on which comment is written
        },
        user:{
            type:String,
            required:true,
        },
        body:{
            type:String,
            required:true,
        }
 

    }
);

//export
module.exports = mongoose.model("Comment",commentSchema);