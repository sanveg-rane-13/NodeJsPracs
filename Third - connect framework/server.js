let http = require('http');
let connect = require('connect');

let app = connect();

function profile(request, response, next) {
    console.log("profile method called");
    next();
}

function forum(request, response, next) {
    console.log("forum method called");
    next();
}

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server is running...");