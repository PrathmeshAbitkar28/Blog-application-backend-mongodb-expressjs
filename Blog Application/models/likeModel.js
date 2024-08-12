const mongoose=require("mongoose");
//route handler
const likeSchema= new mongoose.Schema({
    post:{
        //refer post model
        type:mongoose.Schema.Types.ObjectId, //get id of  post
        ref:"Post",  //refering post model
    },
    user:{
        type:String,
        required:true,
    },
});
//export Schema
module.exports =mongoose.model("Like",likeSchema);