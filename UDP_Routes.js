module.exports = function(server){
	server.on('message', function (message, remote) {
    	console.log(remote.address + ':' + remote.port +' - ' + message);

    	var response = "caralho";
    	server.send(
            response,
            0, // Buffer offset
            response.length,
            remote.port,
            remote.address,
            function( error, byteLength ) {

                console.log( "... Sent response to " + remote.address + ":" + remote.port );

            }
        );
	});
};