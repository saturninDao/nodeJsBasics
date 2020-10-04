var http = require('http');
var salutations = require('./node_modules/package/lib/salutations');


var server = http.createServer((request,response)=>{
    response.end(salutations.salutations());
});

server.listen(8888);