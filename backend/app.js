const express = require('express');
const app = express();

if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({ path: "backend/config/config.env" });
}


//use middleware
app.arguments(express.json());
app.use(express.urlencoded({ extended: true }));

//import routes
const postRoute = require("./routes/post");



//use routes
app.post("/api/v1", postRoute);


module.exports = app