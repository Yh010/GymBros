const mongoose = require("mongoose");


exports.connectDatabase = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then((con) => { console.log(`Connected to MongoDB successfully:  ${con.connection.host}`) })
        .catch((err) => { console.log(err) });
    
};
