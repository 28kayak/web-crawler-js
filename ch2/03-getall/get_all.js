//import module 
var client = require("cheerio-httpcli");
var request = require("request");
var fs = require("fs");
var URL = require("url");
var path = require("path");

//shared setting 
var LINK_LEVEL = 3;
	// body...

//Nakahara Chuya
//var TARGET_URL = "http://www.aozora.gr.jp/index_pages/person26.html"
var TARGET_URL = "https://www.uta-net.com/songs/";
//"http://nodejs.jp/nodejs.org_ja/docs/v0.10/api/";
var list = {};
var counter = 0;

downloadRec(TARGET_URL, 0);


function downloadRec(url, level, counter)
{
	counter ++;
	console.log("Start Downloading : " + url);
	//check level reaches to given 
	if(level >= LINK_LEVEL)
	{
		return; 
	}//end of if
		//check if a file on the url is already downloaded or not 
		if (list[url])
		{
			//aready done 
			return; 
		}
		list[url] = true;
		//ignore pages if they are not targeted 
		var us = TARGET_URL.split("/");
		console.log(us);
		us.pop();
		var base = us.join("/");
		if(url.indexOf(base) < 0)
		{
		 return ; 
		}
		//get htmls
		client.fetch(url, {}, function(err, $, res){
			if (typeof $ === 'undefined')
			{
				//for some reasons, $ is undefined so skip it 
				return; 
			}
			else
			{
				console.log("show $");
				console.log($);
				console.log("show $(a)");
				console.log($("a"));
				$("a").each(function(idx){
					//get links that used in a-tags 
					var href = $(this).attr('href');
					if (!href) 
					{
						return;
					}
					//convert relative path to absolute path 
					href = URL.resolve(url, href);
					//ignore # 
					href = href.replace(/\#.+$/, "");
					downloadRec(href, level + 1);
				});
				//save pages 
				//define file names 
				if (url.substr(url.length-1, 1)== '/')
				{
					url += counter.toString() + "/index.html"; // automatically add index page 
				}
				var save_path = url.split("/").slice(2).join("/");
				checkSaveDir(save_path);
				console.log(save_path + "\n");
				fs.writeFileSync(save_path, $.html());
			}
			
		});//end of fetch
	 
}//end of downloadRec 
function checkSaveDir(fname) {
	//extract directory part 
	var dir = path.dirname(fname);
	//create directory recursively 
	var dirlist = dir.split("/");
	console.log("Print Dir List");
	console.log(dirlist);
	var p = "";
	for (var i in dirlist)
	{
		p += dirlist[i] + "/";
		if(!fs.existsSync(p))
		{
			fs.mkdirSync(p);
		} 
	}
}
	