var http = require('http'),
	url = require('url'),
	port = process.argv[2];

http.createServer(function(req, res) {
	var endpoint = url.parse(req.url, true),
		date = new Date(endpoint.query.iso);
	if (endpoint.pathname === '/api/unixtime' || endpoint.pathname === '/api/unixtime/') {
			var dateParsed = JSON.stringify({
				unixtime: date.getTime()
			});
		res.writeHead(200, {"Content-Type": "application/json"});
		res.end(dateParsed);
	} else if (endpoint.pathname === '/api/parsetime' || endpoint.pathname === '/api/parsetime/') {
			var dateParsed = JSON.stringify({
				hour: date.getHours(),
				minute: date.getMinutes(),
				second: date.getSeconds()
			});
		res.writeHead(200, {"Content-Type": "application/json"});
		res.end(dateParsed);
	} else {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end("use /api/parsetime?iso={dateInISOformat} <br> or <br> /api/unixtime?iso={dateInISOformat} <br> to get parsed time");
	}
}).listen(port);