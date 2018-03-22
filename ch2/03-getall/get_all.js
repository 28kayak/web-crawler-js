//import module 
var client = require("cheerio-httpcli");
var request = require("request");
var fs = require("fs");
var URL = require("url");
var path = require("path");

//shared setting 
var LINK_LEVEL = 3;
var TARGET_URL = "http://nodejs.jp/nodejs.org_ja/docs/v0.10/api/";

function downloadRec(url, level)
{
	//check level reaches to given 
	if(level >= LINK_LEVEL)
	{
		//check if a file on the url is already downloaded or not 
		if (list[url])
		{
			//aready done 
			return; 
		}
		list[url] = true;
		//ignore pages if they are not targeted 
		var us = TARGET_URL.split("/");
		us.pop();
		var base = us.join("/");
		if(url.indexOf(base) < 0)
		{
		 return ; 
		}
		//get htmls
		client.fetch(url, {}, function(err, $, res){
			$("a").each(function(idx){
				//get links that used in a-tags 
				var href = $(this).attr('href');
				
			});

		})




	}
}

