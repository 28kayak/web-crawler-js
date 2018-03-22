//import module 
var client = require("cheerio-httpcli");
var request = require("request");
var fs = require("fs");
var URL = require("url");

var save_dir = __dirname + "/img";


var url = "https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%8C";
var param = {};
client.fetch(url, param, function (err, $, res) {
	if (err) 
	{
		console.log(err);
		return ;
	}
	$("img").each(function(idx){
		var src = $(this).attr('src');
		src = URL.resolve(url, src);
		//generate a file name to save 
		var fname = URL.parse(src).pathname;

		//fname = save_dir + "/" + fname.replace(/[^a-zA-Z0-9\.]+/g, '_');
		 fname = save_dir + "/" + fname.replace(/[^a-zA-Z0-9\.]+/g, '_');
		//download 
		var dl_img = request(src);
		console.log(src);

		dl_img.pipe(fs.createWriteStream(fname));




	});//end of each 

});//end of fetch

