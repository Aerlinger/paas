var http = require('http');

http.createServer(function(req, res) {
    res.end('Hello, little PaaS\n');
}).listen(process.env.port || 5000);

console.log('My little PaaS started on port', process.env.port || 5000);
