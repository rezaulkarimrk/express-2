const express = require('express');
const handle = require('./helpers');

const app = express();
const admin = express();
const router = express.Router();
app.locals.title = 'My App';

router.get('/', (req, res) => {
    console.log(app.locals.title);
    res.send(`This is home page`)
})

router.get('/about', (req, res)=> {
    res.send('This is about page');
});


router.post('/', (req, res)=> {
    res.send('This is home page with post request');
});

admin.get('/dashboard', (req, res) => {
    console.log(admin.mountpath);
    res.send('welcome to admin dashboard');
});

app.use('/admin', admin);

app.use(router);

// app.use(express.json());
// app.use(express.raw());
// app.use(express.text());
// app.use(express.urlencoded());
// app.use(express.static(`${__dirname}/public/`, {
//     index: 'index.html'
// }));

// app.get('/', (req, res)=> {
//     res.send('This is home page');
// });

// app.post('/', (req, res) => {
    // console.log(req.body)
    // console.log(typeof req.body)
    // console.log(req.body.name)
//     console.log(req.body);

//     res.send('This is home page with post request');
// });

app.listen(3000, ()=> {
    console.log('listening on port 300');
});


