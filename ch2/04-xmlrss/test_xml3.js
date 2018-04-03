//import module 
var parseString = require('xml2js').parseString;


//xml data to test 
var xml = 
  "<items>" +
  "<item><name>Banana</name><price>130</price></item>" +
  "<item><name>Apple</name><price>300</price></item>" +
  "<item><name>Pear</name><price>250</price></item>" +
  "</items>";

parseString(xml, function(err, result) {
	console.log(JSON.stringify(result));
	console.log(result.items);

	for (var i = 0; i < 3; i++) 
	{
		console.log("----");
		
		console.log(result.items.item[0].name[0]);
		console.log(result.items.item[i].price[i]);
	}


});//end of parseString
