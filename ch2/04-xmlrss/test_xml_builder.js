//import modules
var xml2js = require("xml2js");

//original object (JSON)
var original_obj = {
	item: {name: "Banana", price: 150 }
};
var json = {
    "name":"John",
    "age":30,
    "cars": {
        "car1":"Ford",
        "car2":"BMW",
        "car3":"Fiat"
    }
 }
//convert to xml 
var builder = new xml2js.Builder();
var xml1 = builder.buildObject(original_obj);
var xml2 = builder.buildObject(json);

console.log(xml2);


function make_dir(new_dir_name) {

	var save_path = __dirname + new_dir_name
	//make a directory synchronously 
	if (!fs.existsSync(save_path))
	{
		fs.mkdirSync(save_path);
		console.log("made " + save_path);
	}
	else
	{
		console.log(save_path + "is already exists");
	}
}

