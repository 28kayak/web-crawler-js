//before use this program 
//install rhino with yum

//To run by rhino
//rhino download-rhino.js 
//To run by nashorn
//jjs download-rhino.js  



//download a file located on the url to savepath 
var url = "http://kujirahand.com/";
var savepath = "test.html"

//download 
var aUrl = new java.net.URL(url)
var conn = aUrl.openConnection();//make connection to the url 
var ins = conn.getInputStream();//get input stream 
var file = new java.io.File(savepath);
var out = new java.io.FileOutputStream(file);

var b;
while((b = ins.read()) != -1)
{
	out.write(b);
}
out.close();//close output stream 
ins.close();//close input stream 