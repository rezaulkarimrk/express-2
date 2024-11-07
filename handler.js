const handler = (req, res) => {
    // console.log(req.accepts('json'));
    // console.log(req.app.get('view engine'));
    // if(req.accepts('html')){
    //     res.render();
    // } else {
    //     res.send('Hello world');
    // }
    // console.log(req.get('Accept'));
    console.log(req.get('content-type'));
    res.send('Hello World');
}

module.exports = handler;