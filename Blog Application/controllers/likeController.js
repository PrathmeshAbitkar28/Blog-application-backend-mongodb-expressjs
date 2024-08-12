const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//like a post

exports.likePost= async (req,res)=>{

    try{
        const {post,user} = req.body;//fetch data from body
        const like=new Like({   //object creation // new Like is model see top import 
            post,user,
        });
        const savedLike = await like.save(); //like saved

        //update post collection in database
        const updatedPost= await Post.findByIdAndUpdate( post , {$push: {likes:savedLike._id}} , {new:true})
        //post - is fetch from body
        //$push - to push inside like array
        //likes - is array of like in Post model
        //.savedLike._id  - is pushing id of savedlikes 
        //{new:true} - is flag to updated value
        .populate("likes").exec();
        res.json({
            post:updatedPost,
        })
    }

    catch(error)
    {
        return res.status(500).json({
            error:"error while making like ",
        })
    }
};

exports.unlikePost= async (req,res)=>{
    try{
        const {post,like} = req.body;

        //1. find and delete from like collection (delete from like collection)
     
        const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

        //above line of code --------  compare and delete findOneAndDelete(post=post, _id=like)


        //2. update the  post collection (delete from post collection )
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id} } , {new:true} );


        res.json({
            post:updatedPost,
        })
    }
    catch(error)
    {
        return res.status(500).json({
            error:"error while unliking post",
        })
    }
}