var http = require('http');
var host = 'localhost';
var port = '8080';
var server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world '+dowork());
});

function dowork(){
    let b = 0;
    for (let i=0;i<10000000;i++){
        b++;
    }
    return b;
}

server.listen(port, host, ()=>{
    console.log(`Server is running at http://${host}:${port}`);
});