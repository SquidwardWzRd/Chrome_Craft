var http = require('http');
var fs = require('fs');
var path = require('path');

/*
- Favicon not working



*/


const PORT=8080;

http.createServer(function(request, response) {
    if(request.url=='/'){
        fs.readFile('./index.html', function (err, html) {
             if (err) {
                  throw err
             }
             response.writeHeader(200, {"Content-Type": "text/html"});
             response.write(html);
             response.end();
        });
    } else if(request.url=='/js/main.js'){
        fs.readFile('./js/main.js', function (err, jsFile) {
             if (err) {
                  throw err
             }
             response.writeHeader(200, {"Content-Type": "text/javascript"});
             response.write(jsFile);
             response.end();
        });
    } else if (request.url=='/AsepriteSaves/Block.png'){
        fs.readFile('./AsepriteSaves/Block.png', function (err, pngFile) {
            if (err){
                throw err
            }
            response.writeHeader(200, {"Content-Type": "image/png"});
            response.write(pngFile);
            response.end();
        });
    } else if (request.url=='/favicon.ico'){
        fs.readFile('./favicon.ico', function (err, icoFile) {
            if (err){
                throw err
            }
            response.writeHeader(200, {"Content-Type": "image/ico"});
            response.write(icoFile);
            response.end();
        });
    }

}).listen(PORT);