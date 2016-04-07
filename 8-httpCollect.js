var http = require('http'),
	bl = require('bl'),
	url = process.argv[2];

http.get(url, function(res){
	res.pipe(bl(function (err, data) {  
	    if (err) return console.log(err);
	    console.log(data.length);
	    console.log(data.toString());  
	}));
})