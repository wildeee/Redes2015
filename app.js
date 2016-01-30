var express = require('express');
var app = express();

var http = require('http').Server(app);
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

functions = require('./functions.js');
require('./TCP_Routes.js')(app);
require('./UDP_Routes.js')(server);

var HOST = 'localhost';

var PORT_TCP = 3000;
http.listen(PORT_TCP, HOST, function(){		
	console.log('Rodando TCP em '+ HOST + ':' + PORT_TCP);
});


var PORT_UDP = 4000;
server.on('listening', function () {
    var address = server.address();
    console.log('Rodando UDP em ' + HOST + ":" + address.port);
});
server.bind(PORT_UDP, HOST);