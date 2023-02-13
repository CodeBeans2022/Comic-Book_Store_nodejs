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

//Port

let port = parseInt(process.env.port) || 4000;

//App
let app = express();

// Router

let route = express.Router();

app.use(
    route
)

//Home or /

route.get('/', (req, res) => {
    res.status(200).send('Well Done');
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});