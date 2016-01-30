var PORT = 4000;
var HOST = 'localhost';

var dgram = require('dgram');

var message1 = new Buffer('soma|2|3');
var message2 = new Buffer('subtrai|2|3');
var message3 = new Buffer('multiplica|2|3');
var message4 = new Buffer('divide|2|3');
var message5 = new Buffer('raiz|16');
var message6 = new Buffer('potencia|2|3');
var message7 = new Buffer('fatorial|4');

var client1 = dgram.createSocket('udp4');
client1.send(message1, 0, message1.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client1.close();
});

var client2 = dgram.createSocket('udp4');
client2.send(message2, 0, message2.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client2.close();
});

var client3 = dgram.createSocket('udp4');
client3.send(message3, 0, message3.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client3.close();
});

var client4 = dgram.createSocket('udp4');
client4.send(message4, 0, message4.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client4.close();
});

var client5 = dgram.createSocket('udp4');
client5.send(message5, 0, message5.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client5.close();
});

var client6 = dgram.createSocket('udp4');
client6.send(message6, 0, message6.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client6.close();
});

var client7 = dgram.createSocket('udp4');
client7.send(message7, 0, message7.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client7.close();
});