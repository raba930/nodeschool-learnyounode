var sum = 0; 
process.argv.forEach(function(item, index){
	if (index <= 1) return;
	sum += Number(item);
});
console.log(sum);