const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const todoHandler = require('./routeHandler/todohndler')
const userHandler = require('./routeHandler/userHandler')

// express app initialization
const app = express();
app.use(express.json());
dotenv.config();

//database connection with mongoose
mongoose.connect('mongodb://localhost/todos')
        .then(() => console.log('connection successful'))
        .catch(() => console.log(err));

// application route
app.use('/todo', todoHandler);
app.use('/user', userHandler)

// default error handling
const ErrorHandler = (err, req, res, next) => {
    if(res.headersSent){
        return next(err)
    }
    res.status(500).json({error: err});
}

app.use(ErrorHandler);

app.listen(3000, () => {
    console.log("app listening at port 3000");
});