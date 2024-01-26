const Post = require("../models/Post");

exports.createPost = async (req,res) => {
    try {

        const newPostData = {
            title: req.body.title,
            image: {
                public_id: "req.body.image.public_id",
                url: "req.body.image.url"
            },
            owner: req.user._id,
        };
        
        const newPost = await Post.create(newPostData);

        res.status(201).json({
            success: true,
            newPost,
        });

    } catch(error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}