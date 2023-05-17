"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var server = http_1.default.createServer(function (req, res) {
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1>Hello World</h1>');
            res.end();
            return;
        }
    }
})
    .listen(8080, function () { return console.log('server listening on port 8080!'); });
