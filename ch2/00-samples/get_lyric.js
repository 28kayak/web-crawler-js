//import module 
var client = require("cheerio-httpcli");
var request = require("request");
var fs = require("fs");
var URL = require("url");
var path = require("path");

var TARGET_URL = "https://www.uta-net.com/song/"
var list = {};
var param = {};


function download_lyrics(url)
{
	client.fetch(url, param, function(err, $, res){
	//check if there is an err 
	if(err)
	{
		console.log("Error: ", err);
		return;
	}
	var body = $.html();
	console.log(body);
	if (url.substr(url.length-1, 1)== '/')
	{
			url += "index.html"; // automatically add index page 
	}
	var save_path = url.split("/").slice(2).join("/");
	checkSaveDir(save_path);
	console.log(save_path + "\n");
	fs.writeFileSync(save_path, $.html());
	//the console output is printed on ./downloaded_html/result_retriving_nakahara
	});//end of fetch

}//end of function

for (var i = 1; i <= 244921; i++)
{
	var url = TARGET_URL + i; 
	download_lyrics(url);
}