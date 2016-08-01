var http = require('http');

http.get(process.argv[2], function (request) {
	 /* body... */ 
	 request.setEncoding('utf-8');
	 request.on('data', function(value){
	 	console.log(value);
	 });
});