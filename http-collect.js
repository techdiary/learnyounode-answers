var http = require('http');

http.get(process.argv[2], function (response) {
	 var datas = ""
	 /* body... */ 
	 response.setEncoding('utf-8');
	 //Add data whenver called
	 response.on('data', function(data){
	 	datas += data;
	 });
	 //When the buffer ends pass the data 
	 response.on('end', function(){
	 	console.log(datas.length);
	 	console.log(datas);
	 })
})