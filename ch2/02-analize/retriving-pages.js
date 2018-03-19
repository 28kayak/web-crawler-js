//import module 
var client = require("cheerio-httpcli");


//download 
//Miyazawa Kenji
//var url = "http://www.aozora.gr.jp/index_pages/person81.html";
//Nakahara Cyuuya 
var url = "http://www.aozora.gr.jp/index_pages/person26.html";
//var url = "http://www.aozora.gr.jp/index_pages/personal81.html";
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
	//the console output is printed on ./downloaded_html/result_retriving_nakahara

});//end of fetch