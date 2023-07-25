var http = require('http');
var imp = require('./third_module');
 http.createServer(function (req,res){
//     res.writeHead(200,{'Content-type':'text/html'});
    res.write(imp.myMessage());
const msg = imp.myMessage();
console.log(msg);

   res.end();
 }).listen(4001);
