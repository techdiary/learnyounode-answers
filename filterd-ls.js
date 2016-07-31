var fs = require('fs');
var path = require('path');

var ext = '.' + process.argv[3];
var dir = process.argv[2];

fs.readdir(dir,function(err, list){
	// body
	if(err)
		console.log(err);
	for (var i = 0; i < list.length; i++) {
		if (path.extname(list[i]) == ext){
			console.log(list[i]);
		}
	}
})