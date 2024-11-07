const handle =  (req, res)=> {
    res.send('This is home page');
    console.log(`${req.app.locals.title} this is External`);
};

module.exports = handle;