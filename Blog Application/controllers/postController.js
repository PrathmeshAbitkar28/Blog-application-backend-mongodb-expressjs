const Post = require("../models/postModel");

exports.createPost=async (req,res) =>{
    try{
        //fetch data from body
        const{title,body}=req.body;
          
        //object creation [ Post is model ]
        const post= new Post({
            title,body,
        });
        //object saved
        const savedPost= await post.save();

        res.json({
            post:savedPost
        });
    }
    catch(error)
    {   return res.status(400)
        .json({
            error:"error while creating post",
        });
    }
};
//fetch all post
exports.getAllPosts=async (req,res)=>{
    try{
        //likes and comments is array in post model
        const posts = await Post.find().populate("likes").populate("comments").exec();
        
        res.json({
            posts,
        });

    }
    catch(Error)
    { 
        return res.status(400).json({
            error:"error while fetching posts",
        });
    }
} 