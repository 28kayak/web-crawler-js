//download a file located on url to savepath 
//set url 
var url = "http://kujirahand.com/";
//set path to save 
var savepath = "test.html"

//get module 
var http = require("http")
var fs = require("fs")

var outfile = fs.createWriteStream(savepath)
//asynchronously download a file from the url 
http.get(url, function(res){
	//prepre to save file
	res.pipe(outfile);
	res.on('end', function(){
		//call-back function after saving it. ass
		outfile.close()
		console.log("OK")
	});
});
