var http = require('http');

var port = 9090;
var server = http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end("<h1>hello, world</h1>")
});

server.listen(port, function(){
    console.log("server starts...[prot: " + port + "]");
});
