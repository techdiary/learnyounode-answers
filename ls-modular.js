var fs = require('fs');
var path = require('path');

module.exports = function (filename, extName, callback){
	var ext = '.' + extName;
	fs.readdir(filename, function(err, files){
		// body
		if(err){
			// I any error occurs in callback
			callback(err);
			}
		else {
			result= [];
			files.forEach( function(file) {
				// statements
				if(path.extname(file) == ext){
					result.push(file);
				}
			});
			// If there's no error callback(from ls-orignal) first argument is null  
			callback(null,result);
		}
	})
}