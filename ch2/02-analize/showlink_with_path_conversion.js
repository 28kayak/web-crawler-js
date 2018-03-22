//To run node showlink_with_path_conversion.js


//read module 
var client = require('cheerio-httpcli');
var URL = require('url');

//define url and its parameter 
var url = "http://www.aozora.gr.jp/index_pages/person81.html";
var params = {};

//download 
client.fetch(url, params, function (err, $, res){
	if (err) {
		console.log("error" + err);
		return;
	}//end of if
	//extract links 
	$("a").each(function(idx){
		var text = $(this).text();
		var href = $(this).attr('href');
		if(!href){
			return;
	}
		//convert relative path to absolute path 
		var href2 = URL.resolve(url, href);
		//show the result 
		console.log(text + " : " + href);
		console.log("   => " + href2 + "\n");
	});

});