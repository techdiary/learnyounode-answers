var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function(err, data){

	// body
	if(err)
		console.log(err);

	var lineData = data.split('\n').length;
	console.log(lineData -1)
});