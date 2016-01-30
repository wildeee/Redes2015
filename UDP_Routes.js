module.exports = function(server){
	server.on('message', function (message, remote) {
    	console.log(remote.address + ':' + remote.port +' - ' + message);
	});
};