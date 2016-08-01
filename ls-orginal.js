var ls_modular = require('./ls-modular.js')

var filename = process.argv[2];
var extName = process.argv[3];

ls_modular(filename, extName, function(err, files){
	// Result Array = files-- --For Loop logs result items
	for (var i = 0; i < files.length; i++) {
		console.log(files[i]);
	}
});