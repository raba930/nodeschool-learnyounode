var http = require('http'),
	url = process.argv[2];

http.get(url, function(res){
	res.on('error', function(data){
		console.log(data.toString());
	}).on('data', function(data){
		console.log(data.toString());
	});
})
