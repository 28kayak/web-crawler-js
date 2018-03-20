var request = require("request");
var fs = require("fs");

//set url
var url = "http://kujirahand.com/";
var savepath ="./downloaded_html/request_test.html"
//download 
request(url).pipe(fs.createWriteStream(savepath));
