var http = require('http');
var map = require('through2-map');

var port = Number(process.argv[2])

var uc = map(function(chunk) {
	return chunk.toString().toUpperCase();
});

var server = http.createServer(function (req, res) {
	 /* body... */ 
	 if (req.method == 'POST')
	 	req.pipe(uc).pipe(res);
})
server.listen(port);