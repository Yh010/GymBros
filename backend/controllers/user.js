

const User = require("../models/User");

exports.createUser = async (req, res) => { 
    try {

        const newUserData ={
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            image: {
                public_id: req.body.image.public_id,
                url: req.body.image.url
            },
            posts: req.body.posts,
            comments: req.body.comments,
            following: req.body.following,
            followers: req.body.followers,
        };

        const newUser = await User.create(newUserData);

        res.status(201).json({
            success: true,
            newUser,
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
