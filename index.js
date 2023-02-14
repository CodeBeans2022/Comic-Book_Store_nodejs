// let {addition} = require('./addition.js');

// addition(4, 5);
// addition(3, 9);

// console.log(addition);

// HTTP Module

// let http = require('http');

// Port

// let port = parseInt(process.env.port)
// || 4000;

// web server

// http.createServer( (req, res)=>{
//     const currUrl = req.url;
//     console.log('Url: ', currUrl, '\nMethod: ', req.method);
//     res.writeHead(200, {'Content-type': 'text/html'});
//     switch(currUrl) {
//         case '/':
//             res.end('You are home');
//         break
//         case '/about':
//             res.end('About me page');
//         break
//         case '/data':
//             res.end('Page data');
//         break
//         default:
//             res.end('Page / content was not found');
//     }
// }).listen(port, () => {
//     console.log(`Server is running at port ${port}`);
// });

//Express

let express = require('express');

//Path

let path = require('path');

//DB

let db = require('./config');

// Body-parser

let bodyParser = require('body-parser');

//Port

let port = parseInt(process.env.port) || 4000;

//App
let app = express();

// Router

let route = express.Router();

// MySQL



app.use(
    route,
    express.json,
    bodyParser.urlencoded({extended: false}),
)

//Home or /

// route.get('/', (req, res) => {
//     res.status(200).send('Well Done');
// });

// app.listen(port, () => {
//     console.log(`Server is running at ${port}`); 
// });

route.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './view/index.html'));
});

route.get('/users', function (req,res) {
    db.query('select firstName, lastName, emailAdd, country from Users', (err, data) => {
        if (err) {
         console.log(err);   
        }
        else{
            res.status(200).json( {results: data} )
        }
    });
});

route.post('/register', bodyParser.json(), (req, res) => {
    let strQry = `insert into Users set ?`;

    db.query(strQry, [detail], (err) => {
        if(err) {
            res.status(400).json({err});
        }
        else{
            res.status(200).json({msg: 'A user was saved.'});
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
