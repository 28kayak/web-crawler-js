download(
	"http://www.aozora.gr.jp/index_pages/person81.html" 
	"miyawazakenji.html" 
	function(){
		console.log("Ok, Kenji");
	});//end of download 
download(
	"http://www.aozora.gr.jp/index_pages/person148.html" 
	"natumesouseki.html"
	function(){
		console.log("Ok, soseki");
	});//end of download 

//download a file located on the url to the direcotry 
function download(url, savepath, callback){
	var http = require('http')
	var fs = require('fs') 
	var outfile = fs.createWriteStream(savepath)
	var req = http.get(url, function(res){
		res.pipe(outfile);
		res.on('end', function(){
			outfile.close();
			callback();
		});//end of on 
	});// end of get 

};//end of download