let http = require('http');
let fs = require('fs');

function errorResponse(response) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("Error 404 page not found");
    response.end();
}

function onRequest(request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./index.html").pipe(response);
    } else {
        errorResponse(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("server is now running");