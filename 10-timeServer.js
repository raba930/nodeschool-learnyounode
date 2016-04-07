var net = require('net'),
	server = net.createServer(function(socket){
	var date = new Date(),
		year = date.getFullYear(),
		month = ("0" + (date.getMonth() + 1)).slice(-2),
		day = ("0" + date.getDate()).slice(-2),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		response = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n';
	socket.end(response);
}).listen(process.argv[2]);