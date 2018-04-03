//import modules
var xml2js = require("xml2js");
var parseString = require('xml2js').parseString;
var builder = new xml2js.Builder();

//xml data to test 
var text = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";

var json_text= '{"name":"John",'+
    '"age":30,'+
    '"cars": {'+
        '"car1":"Ford",'+
        '"car2":"BMW",'+
        '"car3":"Fiat"'+
    '}'+
 '}'


//parse xml
//parseString only parse well-formed xml 
//if the text is not well-formed xml,
//then it will set result as undefined 
parseString(text, function(err, result) {
	if (err)
	{
		console.log(err);
	}
	//display json 
	console.log("---JSON---");
	var json = JSON.stringify(result);
	console.log(JSON.stringify(result));
	//convert xml to json 
	var xml = builder.buildObject(json);
	//display xml
	console.log("---xml---");
	console.log(xml);

})

function convert_xml_to_json(xml) {
	//parse xml 
	var json = JSON.stringify(result);
	return json; 
}
function convert_json_to_xml(json){
	//parse json 
	var builder = new xml2js.Builder();
	var xml = builder.buildObject(json);
	return xml; 

}
