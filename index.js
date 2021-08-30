var http = require('http');
var fs = require('fs');


// Can still further organize this
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
        
        // EXAMPLE:
        
        /* case 'file path for server url':
            fs.readFile('file path for server url', function (err, type) {
                if (err) {
                     throw err
                }
                response.writeHeader(200, {"Content-Type": "text/type"});
                response.write(type);
                response.end();
           });
           break; */
        case '/favicon-32x32.png':
            fs.readFile('./favicon-32x32.png', function (err, image) {
                if (err){
                    throw err
                }
                response.writeHeader(200, {"Content-Type": "image/png"});
                response.write(image);
                response.end();
            });
            break;
        case '/node_modules/three/build/three.module.js':
            fs.readFile('./node_modules/three/build/three.module.js', function (err, jsFile) {
                if (err) {
                     throw err
                }
                response.writeHeader(200, {"Content-Type": "text/javascript"});
                response.write(jsFile);
                response.end();
           });
           break;
        case '/node_modules/three/examples/jsm/libs/stats.module.js':
            fs.readFile('./node_modules/three/examples/jsm/libs/stats.module.js', function (err, jsFile) {
                if (err) {
                     throw err
                }
                response.writeHeader(200, {"Content-Type": "text/javascript"});
                response.write(jsFile);
                response.end();
           });
           break;
        case '/node_modules/three/examples/jsm/utils/BufferGeometryUtils.js':
            fs.readFile('./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js', function (err, jsFile) {
                if (err) {
                     throw err
                }
                response.writeHeader(200, {"Content-Type": "text/javascript"});
                response.write(jsFile);
                response.end();
           });
           break;
        case '/node_modules/three/examples/jsm/libs/dat.gui.module.js':
            fs.readFile('./node_modules/three/examples/jsm/libs/dat.gui.module.js', function (err, jsFile) {
                if (err) {
                     throw err
                }
                response.writeHeader(200, {"Content-Type": "text/javascript"});
                response.write(jsFile);
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
        case '/favicon-16x16.png':
            fs.readFile('./favicon-16x16.png', function (err, image) {
                if (err){
                    throw err
                }
                response.writeHeader(200, {"Content-Type": "image/png"});
                response.write(image);
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
        case '/js/perlinNoise.js':
            fs.readFile('./js/perlinNoise.js', function (err, jsFile) {
                if (err) {
                     throw err
                }
                response.writeHeader(200, {"Content-Type": "text/javascript"});
                response.write(jsFile);
                response.end();
           });
           break;
        case '/js/worldGen2.js':
            fs.readFile('./js/worldGen2.js', function (err, jsFile) {
                if (err) {
                     throw err
                }
                response.writeHeader(200, {"Content-Type": "text/javascript"});
                response.write(jsFile);
                response.end();
           });
           break;
        case '/js/constructor.js':
            fs.readFile('./js/constructor.js', function (err, jsFile) {
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
