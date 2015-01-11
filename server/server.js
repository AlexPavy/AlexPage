var l_ip = process.env.IP || "11.0.0.1";
var l_port = process.env.PORT || 3000;

var http = require('http');
var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var server = http.createServer(app);

// view engine setup
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');*/

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../app')));

/*app.use('/', routes);
app.use('/users', users);*/

console.log("l_port", l_port, l_ip);
server.listen(l_port, l_ip, function(){
  var addr = server.address();
  console.log("WebBasket server listening at", addr.address + ":" + addr.port);
});