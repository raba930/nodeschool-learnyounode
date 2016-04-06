function filterFiles(dir, extension, cb) {
	var fs = require('fs'),
		path = require('path'),
		filteredFiles = [];

	fs.readdir(dir, function(err, files) {
		
		if (err) {
			return cb(err, files);
		}

		files.forEach(function(file) {
			var fileExt = path.extname(file);
			if (fileExt === '.' + extension)
				filteredFiles.push(file);
		});

		cb(null, filteredFiles);
	});
}

module.exports = filterFiles;