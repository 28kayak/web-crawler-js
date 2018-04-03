//RSS from yahoo japan weather 
var RSS = "https://rss-weather.yahoo.co.jp/rss/days/4410.xml";

//read modules 
var parseString = require('xml2js').parseString;
var request = require('request');

//download rss 
request(RSS, function(err,response, body) {
	if(!err && response.statusCode == 200)
	{
		analyzeRSS(body);
	}
});

//analyze RSS
function analyzeRSS(xml) {
	//convert xml to json 
	parseString(xml, function(err, obj) {
		if (err) 
		{
			console.log(err);
			return ;
		}
		//display weather 
		console.log(JSON.stringify(obj));
		var items = obj.rss.channel[0].item;
		console.log(obj.rss.channel[0]);
		//console.log(obj.rss.description);
		for (var i in items) 
		{
			var item = items[i];
			console.log(item.title[0]);	
			console.log(item.description[0]);
			console.log(item.link[0]);
			console.log(item.pubDate[0]);			
		}
	});//end parseString 
}