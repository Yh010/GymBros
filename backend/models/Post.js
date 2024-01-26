const mongoose  = require("mongoose");

const postSchema = new mongoose.schema({
    title: String,
    image: {
        public_id: String,
        url: String
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"  
        }
    ],
    comments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        comment: {
            type: String,
            required: true
        },
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
    /* TODO: Upvote feature */
});

module.exports = mongoose.model("Post", postSchema);

