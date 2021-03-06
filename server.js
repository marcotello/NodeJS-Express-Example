var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;
var IP = process.env.IP || 'localhost';

var middleware = require('./middleware.js')
//app.get('/', function (req, res) {
//     res.send('Hello Expres...');
//})

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('This is the About Us Page...');
})

app.use(express.static(__dirname + '/public'));



app.listen(PORT, function () {
    console.log('Express server started at http://' + IP + ':' + PORT + '/');
});

//console.log('Server running at http://'+process.env.IP+':'+process.env.PORT+'/');

//console.log(__dirname);