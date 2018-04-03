var parseString = require('xml2js').parseString;

//xml data to test
var xml = "<fruits shop='AAA'>" + 
	"<item price='140'>Bnana</item>"+
	"<item price='220'>Apple</item>"+
	"<item price='550'>Mikan</item>"+
	"<item price='150'>Coffee</item>"+
	"</fruits>";
//parse xml
parseString(xml, function(err, result) {
	//instructions after parsing
	console.log(JSON.stringify(result));
	
	var shop = result.fruits.$.shop;
	//display shop name 
	console.log("Shop Name " + shop);

	//display frutis name and price 
	var items = result.fruits.item;
	for (var i in items) 
	{
		var item = items[i];
		console.log("-- name = " + item._);
		console.log("   price=" + item.$.price);
	}
});//end of parse String 