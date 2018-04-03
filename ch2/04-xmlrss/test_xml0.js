//read module 
var parseString = require('xml2js').parseString;

//xml data to test 
var xml = "<item>Bnana</item>";

//parse xml
parseString(xml, function(err, result) {
	console.log(result.item);
});