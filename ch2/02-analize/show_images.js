var client = require("cheerio-httpcli");
var URL = require('url');

//download 
var url = "http://en.wikipedia.org/wiki/Dog";
var param = {};
client.fetch(url, param, function(err, $, res){
	if (err) 
	{
		console.log(err);
		return;
	}
	//display extracted links
	$("img").each(function (idx) {
		var src = $(this).attr('src');
		console.log(url);
		console.log(src)
		src = URL.resolve(url, src);
		console.log(src);
	});
});