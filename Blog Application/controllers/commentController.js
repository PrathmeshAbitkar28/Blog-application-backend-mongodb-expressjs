 const Post=require("../models/postModel");
 const Comment=require("../models/commentModel");

 //logic
 exports.createComment = async (req, res)=>
 {
    try
    { //fetch data from  user body
        const {post, user, body}=req.body;
        //create a comment object
        //new Comment is model..
        const comment =new Comment({ post,user,body });
        //save the new comment object into database
        //save() work same  as create()
        const savedComment = await comment.save();
        //find post by id , add the new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}}, {new:true})
       //update operator -  {$push}
       .populate("comments") //populate comment array with comment documents in post 
       .exec();
        
       res.json({ post:updatedPost, });   
    }
    catch(error)
    {
        console.log("error"); 

       return res.status(500).json({
        error: "error while creating comment",
       });
    }
 }