const express = require("express");
const mongoose = require("mongoose");

const todoHandler = require('./routeHandler/todohndler')

// express app initialization
const app = express();
app.use(express.json());

//database connection with mongoose
mongoose.connect('mongodb://localhost/todos')
        .then(() => console.log('connection successful'))
        .catch(() => console.log(err));

// application route
app.use('/todo', todoHandler);

// default error handling
function ErrorHandler(err, req, res, next) {
    if(res.headersSent){
        return next(err)
    }
    res.status(500).json({error: err});
}



app.listen(3000, () => {
    console.log("ap listening at port 3000");
});