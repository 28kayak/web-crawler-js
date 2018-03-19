download(
	"http://www.aozora.gr.jp/index_pages/person81.html", 
	"./downloaded_html/miyawazakenji.html" ,
	function(){
		console.log("Ok, Kenji");
	});//end of download 
download(
	"http://www.aozora.gr.jp/index_pages/person148.html" ,
	"./downloaded_html/natumesouseki.html",
	function(){
		console.log("Ok, soseki");
	});//end of download 
download(
	"http://www.aozora.gr.jp/cards/000026/files/51334_50060.html",
	"./downloaded_html/chuya_nakahara_kokyu_no_uta.html",
	function() {
		console.log("dl chuya_nakahara_kokyu_no_uta");
	}


	);

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