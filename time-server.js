var net = require('net');

//arguments
var port = process.argv[2];
//Construct
var d = new Date();

function addZero (i) {
	 return (i < 10 ? "0" : "") + i
}

var server = net.createServer(function (socket) {
	  
	  var now = d.getFullYear() + '-'
	  			+ addZero(d.getMonth() + 1) + '-'
	  			+ addZero(d.getDay()) + ' '
	  			+ addZero(d.getHours()) + ':'
	  			+ addZero(d.getMinutes()) +"\n";
socket.write(now)
	  socket.end();
});

server.listen(port);