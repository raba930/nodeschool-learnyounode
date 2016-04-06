var module = require('./6.1-filterModule')

module(process.argv[2], process.argv[3], function(err, data){
	if(err) {
		return console.log('Error: ', err);
	} else {
		data.forEach(function(item){
			console.log(item);
		});
	}
});