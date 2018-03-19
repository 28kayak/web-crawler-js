//import module 
var client = require("cheerio-httpcli")


//download 
var url = "http://www.aozora.gr.jp/index_pages/personal81.html"
var param ={};

client.fetch(url, param, function(err, $, res){
	//check if there is an err 
	if(err)
	{
		console.log("Error: ", err);
		return;
	}
	var body = $.html();
	console.log(body);

});//end of fetch