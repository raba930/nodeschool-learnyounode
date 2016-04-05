var fs = require('fs'),
	path = require('path'),
	dir = process.argv[2],
	extension = '.' + process.argv[3];

fs.readdir(dir, function(err, files) {
	files.forEach(function(file) {
		var fileExt = path.extname(file);
		if (fileExt === extension)
			console.log(file);
	});
});