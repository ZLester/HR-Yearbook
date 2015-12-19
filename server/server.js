// http://expressjs.com/en/api.html#app
// http://expressjs.com/en/starter/static-files.html
// http://expressjs.com/en/guide/routing.html
// http://expressjs.com/en/guide/using-middleware.html
// https://github.com/expressjs/body-parser
// https://nodejs.org/api/path.html#path_path_join_path1_path2
// http://mongoosejs.com/docs/connections.html

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');;

var router = require('./routers/router.js')

var app = express();

var port = process.env.PORT || 3000;

// Any requests that hit a route other than /api will be served out of our client folder.
app.use(express.static(path.join(__dirname, "../client")));
// Any prefixed that hit the /api will be directed to our router.
app.use('/api', router);

console.log('Hack Reactor Yearbook Listening on ' + port);
app.listen(port);  