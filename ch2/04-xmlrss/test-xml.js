var parseString = require('xml2js').parseString;

//xml data to test
var xml = "<fruits shop='AAA'>" + 
	"<item price='140'>Bnana</item>"+
	"<item price='220'>Apple</item>"+
	"</fruits>";
//parse xml
parseString(xml, function(err, result) {
	//instructions after parsing
	console.log(JSON.stringify(result));
})