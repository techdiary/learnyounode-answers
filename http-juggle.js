var http = require('http');

var result = [];
var count = 0;
var urls = process.argv.slice(2);

function printResult () {
	for (var i = 0; i < 3; i++) {
		console.log(result[i]);
	}
}

function httpGet(index){
	http.get(urls[index], function(response){
		// chnge buffer data to string
		response.setEncoding('utf-8');
		// temporary var to hold data.
		var results = "";
		//whenver data passed collect it and store it
		response.on('data', function(data){
			results += data;
			
		});
		// when request to data stops, log result
		response.on('end', function(){
			 /* Increment when request for particular
			  url ends... */
			 count++;
			 result[index] = results;
			 //Allow only when all the  urls 
			 // data are colleted.
			 if (count == urls.length) { 
			 	printResult();
			 }
		})
	});
}

for (var i = 0; i < urls.length; i++) {
	httpGet(i);
}
