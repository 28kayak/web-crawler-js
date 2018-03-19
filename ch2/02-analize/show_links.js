var client = require('cheerio-httpcli')

//download 
var url = "http://www.aozora.gr.jp/index_pages/personal81.html"
var param = {};

client.fetch(url, param, function(err, $, res){
	if (err) {
		console.log("ERROR")
		return ; 
	}
	$("a").each(function(idx){
		var text = $(this).text();
		var href = $(this).attr('href');
		console.log(text + ":" + href);
	});

});//fetch