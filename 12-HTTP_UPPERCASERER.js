var http = require('http'),
	map = require("through2-map");

http.createServer(function(req, res) {
	if (req.method === 'POST') {
		req.pipe(map(function(data){
			return data.toString().toUpperCase();
		})).pipe(res);
	}
}).listen(process.argv[2]);