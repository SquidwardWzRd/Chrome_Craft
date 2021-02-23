var http = require('http');
var fs = require('fs');
var path = require('path');

const PORT=8080;
http.createServer(function(request, response) {
    switch (request.url) {
        case '/':
            fs.readFile('./index.html', function (err, html) {
                if (err) {
                     throw err
                }
                response.writeHeader(200, {"Content-Type": "text/html"});
                response.write(html);
                response.end();
           });
           break;
        case '/js/main.js':
            fs.readFile('./js/main.js', function (err, jsFile) {
                if (err) {
                     throw err
                }
                response.writeHeader(200, {"Content-Type": "text/javascript"});
                response.write(jsFile);
                response.end();
           });
           break;
        case '/AsepriteSaves/Block.png':
            fs.readFile('./AsepriteSaves/Block.png', function (err, pngFile) {
                if (err){
                    throw err
                }
                response.writeHeader(200, {"Content-Type": "image/png"});
                response.write(pngFile);
                response.end();
            });
            break;
        case '/AsepriteSaves/Grass.png':
            fs.readFile('./AsepriteSaves/Grass.png', function (err, pngFile) {
                if (err){
                    throw err
                }
                response.writeHeader(200, {"Content-Type": "image/png"});
                response.write(pngFile);
                response.end();
            });
            break;
        case '/favicon.ico':
            fs.readFile('./favicon.ico', function (err, icoFile) {
                if (err){
                    throw err
                }
                response.writeHeader(200, {"Content-Type": "image/ico"});
                response.write(icoFile);
                response.end();
            });
            break;
        case '/js/cube.js':
            fs.readFile('./js/cube.js', function (err, jsFile) {
                if (err) {
                     throw err
                }
                response.writeHeader(200, {"Content-Type": "text/javascript"});
                response.write(jsFile);
                response.end();
           });
           break;
        case '/js/movement.js':
            fs.readFile('./js/movement.js', function (err, jsFile) {
                if (err) {
                     throw err
                }
                response.writeHeader(200, {"Content-Type": "text/javascript"});
                response.write(jsFile);
                response.end();
           });
           break;
        case '/js/print.js':
            fs.readFile('./js/print.js', function (err, jsFile) {
                if (err) {
                     throw err
                }
                response.writeHeader(200, {"Content-Type": "text/javascript"});
                response.write(jsFile);
                response.end();
           });
           break;
        case '/js/World_Generation.js':
            fs.readFile('./js/World_Generation.js', function (err, jsFile) {
                if (err) {
                     throw err
                }
                response.writeHeader(200, {"Content-Type": "text/javascript"});
                response.write(jsFile);
                response.end();
           });
           break;
    }
}).listen(PORT);
