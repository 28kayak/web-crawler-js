//RSS from yahoo japan weather 
var RSS = "https://rss-weather.yahoo.co.jp/rss/days/4410.xml";

//import modules 
var client = require("cheerio-httpcli");

//download rss 
client.fetch(RSS, {}, function(err, $, res) {
	// body...
	if (err)
	{
		console.log(err);
		return; 
	}
	//display data
	$("item > title").each(function(idx) {
		//console.log($(this).next());
		var title = $(this).text();
		console.log(title);
		$("item > link").each(function(idx) {
			var link = $(this).text();
			console.log(link);
		});
	});

	

});//end fetch 