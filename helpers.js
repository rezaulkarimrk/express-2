const handle =  (req, res)=> {
    res.send('This is home page');
    console.log(req.app.locals.title)
};

module.exports = handle;