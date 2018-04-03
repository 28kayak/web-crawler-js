var fs = require('fs');

//mkdir
console.log("exec mkdir");

//create a dir with async 
//"waiting...." appears the first 
fs.mkdir("test", function() {
	// body...
	console.log("Done");
});//end of mkdir 
console.log("waiting for the result");