const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs');
// const handle = require('./helpers');

const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');

const app = express();
app.use(express.json());
app.use(cookieParser());
const handler = require('./handler');
// const admin = express();
// const router = express.Router();
// app.locals.title = 'My App';
// app.enable('case sensitive routing');
app.set('view engine', 'ejs');
const adminRoute = express.Router();
// const adminRouter = express.Router();


// synchronas error handling
// app.get('/', (req, res, next) => {
    // fs.readFile('/file-does-not-exist', (err, data) => {
    //     if(err){
    //         next(err);
    //     } else {
    //         res(data);
    //     }
    // });

    // setTimeout(() => {
    //     try {
    //         console.log(a)
    //     } catch (err) {
    //         next(err)
    //     }
    // }, 100)
// })

app.get('/', [
    (req, res, next) => {
        fs.readFile('/file-dosent-exist', 'utf-8', (err, data) => {
            console.log(data);
            next(err);
        });
    },
    (req, res, next) => {
        console.log('i am not called!');
        next();
    }
])

app.use((err, req, res, next) => {
    if(res.headerSend){
        next("There was a problem!");
    } else {
        if(err.message){
            res.status(500).send(err.message);
        } else{
            res.send("There was a problem");
        }
    }
})



/*
//asynchronas error handling
app.get('/', (req, res) => {

    res.send();
})

app.use((req, res, next) => {
    // res.status(404).send('Request url was not found!');
    next('Request url was not found!')
});

app.use((err, req, res, next) => {
    if(res.headerSend){
        next('There was a problem');
    } else {
        if(err.message){
        res.status(500).send(err.message);
        }
        else {
            res.status(500).send('There was an error!');
        }
    }
})
*/


// app.get('/', (req, res) => {
//     throw new Error('There was an error!')
// });


// app.use('/admin', adminRouter);
// app.use('/', publicRouter)

// const myMiddleware1 = (req, res, next) => {
//     console.log('I am logging 1');
//     next();
// }
// const myMiddleware2 = (req, res, next) => {
//     console.log('I am logging 2');
//     next();
// }
// const logger = (req, res, next) => {
//     console.log(`${new Date(Date.now()).toLocaleDateString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}` )
//     // next()
//     throw new Error('Ths is an error')
// }

// const loggerWrapper = (options) => {
//     return (req, res, next) => {
//         if(options.log) {
//             console.log(`${new Date(Date.now()).toLocaleDateString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}` );
//             next();
//         } else {
//             throw new Error('Failed to log');
//         }
//     }
// }

// const errorMiddleware = (err, req, res, next) => {
//     console.log(err.message);
//     res.status(500).send('There was a server side error!');
// }

// app.use(myMiddleware1);
// app.use(myMiddleware2);
// app.use(logger);
// adminRouter.use(logger);
// adminRouter.use(loggerWrapper({ log: true }));
// adminRouter.use(errorMiddleware);

// adminRouter.get('/dashboard', (req, res) => {
//     res.send('Dashboard');
// });

// app.use('/admin', adminRouter)

// app.get('/about', (req, res) => {
//     res.send('About');
// })


// app.get('/test', (req, res) => {
//     res.send('Hello');
// })

// app.get('/about', (req, res) => {
    // console.log(res.headersSent);
    // res.render('./pages/about.ejs', {
    //     name: 'Bangladesh'
    // })
    // console.log(res.headersSent);

    // res.send('About');
    // res.end();

    // res.json({
    //     Aga: '26',
    //     "name": "Bangladesh"
    // })

    // res.status(401);
    // res.end();

    // res.sendStatus(403);
    
    // res.format({
    //     'text/plain': ()=> {
    //         res.send('hi');
    //     },
    //     'text/html': ()=> {
    //         res.render('./pages/about.ejs', {
    //             name: 'Rezaul Karim RK'
    //         })
    //     },
    //     'application/json': ()=> {
    //         res.json({
    //             message: 'About'
    //         })
    //     },
    //     default: ()=> {
    //         res.status(406).send('Not acceptable');
    //     }
    // });

    // res.cookie('name', 'Rezaul Karim', {
    //     host: 'Sabbir Rahman'
    // });
    // res.end();

    // res.location('/testPage');
    // res.end();

    // res.redirect('/test');
    // res.end();

//     res.set('Platform', 'Rezaul Karim RK');
//     console.log(res.get('Platform'));
//     res.end();

// });

// adminRoute.get('/dashboard', (req, res) => {
    // console.log(req.baseUrl);
    // console.log(req.originalUrl);
    // console.log(req.url);
    // console.log(req.path)
    // console.log(req.hostname)
    // console.log(req.ip)
    // console.log(req.method)
//     console.log(req.protocol)
//     res.send('We are in Admin Dashboard');
// });
// app.use('/admin', adminRoute)

// app.get('/user/:id', handler
//     (req, res) => {
//     // console.log(req.baseUrl);
//     // console.log(req.originalUrl);
//     // console.log(req.url);
//     // console.log(req.path)
//     // console.log(req.hostname)
//     // console.log(req.method)
//     // console.log(req.protocol)
//     // console.log(req.params)
//     // console.log(req.params.id);
//     // console.log(req.query)
//     // console.log(req.cookies)
//     console.log(req.secure);
//     res.send('Hello world');
// }
// );

// app.post('/user/', (req, res) => {
//     // console.log(req.body);
//     console.log(req.route);
//     res.send('Hello world post');
// });

// app.get('/', (req, res)=> {
//     res.send('Welcome to applicatiion home');
// });

// app.param('id', (req, res, next, id)=> {
//     const user = {
//         userId: id,
//         name: 'Bangladesh'
//     };
//     req.userDetails = user;
//     next();
// })

// app.all('/about/user/:id', (req, res)=> {
//     console.log(req.userDetails);
//     console.dir(app.path());
//     res.send('Welcome to applicatiion home');
// });

// app.route('/about/mission')
//     .get((req, res) => {
//         // res.send('Welcome to application home get');
//         // res.render('index');
//         res.render('pages/about');
//     })
//     .post((req, res) => {
//         res.send('Welcome to appcition home post');
//     })
//     .put((req, res) => {
//         res.send('Welcome to application home put');
//     })

// app.all('/', (req, res)=> {
//     res.send('Welcome to applicatiion home');
// });

// router.get('/', (req, res) => {
//     console.log(app.locals.title);
//     res.send(`This is home page`)
// })

// router.get('/about', (req, res)=> {
//     res.send('This is about page');
// });


// router.post('/', (req, res)=> {
//     res.send('This is home page with post request');
// });



// admin.get('/dashboard', (req, res) => {
//     console.log(admin.mountpath);
//     res.send('welcome to admin dashboard');
// });

// app.use('/admin', admin);

// app.use(router);

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
    console.log('listening on port 3000');
});


