var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data){ // 'utf8' -> data in cb is a string not buffer
	if (err) console.log('ERROR: ', err);
	var newLineNo = data.split('\n').length - 1;
	console.log(newLineNo);
});