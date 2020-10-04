var http = require('http');
const { request } = require('https');

var server = http.createServer((request,response)=>{
    response.end('Hello world de NodeJs');
});

server.listen(8888);