var fs = require('fs'),
	filePath = process.argv[2],
	fileContent = fs.readFileSync(filePath).toString(),
	spacesNumber = fileContent.split('\n').length - 1;

console.log(spacesNumber);