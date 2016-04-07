var http = require('http'),
	bl = require('bl'),
	dataArray = [null, null, null],
	error = null,
	check = function() {
		if (error) return console.log(error);
		if (dataArray[0] && dataArray[1] && dataArray[2]) {
			console.log(dataArray[0]);
			console.log(dataArray[1]);
			console.log(dataArray[2]);
		}
	};

http.get(process.argv[2], function(res){
	res.pipe(bl(function (err, data) {  
	    if (err) {
	    	error = err;
	    	check();
	    	return;
	    }
	    dataArray[0] = data.toString();
	    check();
	}));
})
http.get(process.argv[3], function(res){
	res.pipe(bl(function (err, data) {  
		if (err) {
	    	error = err;
	    	check();
	    	return;
	    }
	    dataArray[1] = data.toString();
	    check();
	}));
})
http.get(process.argv[4], function(res){
	res.pipe(bl(function (err, data) {  
		if (err) {
	    	error = err;
	    	check();
	    	return;
	    }
	    dataArray[2] = data.toString();
	    check();
	}));
})