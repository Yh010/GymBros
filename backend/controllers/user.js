

const User = require("../models/User");

exports.register = async (req, res) => { 
    try {
        const { username, email, password } = req.body;
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                success: false,
                message:"User already exists"
            })
        }

        user = await User.create({ username, email, password,image:{public_id:"sampleId",url:"smapleurl"} });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
