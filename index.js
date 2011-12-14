var http = require('http')

var handler = function(req,res){
  res.writeHead(200,{'Content-Type': 'text/plain'})
  res.end('Hello world\n')
}

http.createServer(handler).listen(3000)
