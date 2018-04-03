//read module
var fs = require('fs');

//make a directory with sync
console.log("exec mkdir");
fs.mkdirSync("test-sync");
console.log("done");