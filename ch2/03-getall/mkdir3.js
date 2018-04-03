//import modules 
var fs = require('fs');


var dir_name = "test3";
//make a directory synchronously 
if (!fs.existsSync(dir_name))
{
	fs.mkdirSync(dir_name);
	console.log("made " + dir_name);
}
else
{
	console.log(dir_name + "is already exists");
}