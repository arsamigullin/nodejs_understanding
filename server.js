var http = require("http");
//var process = require('./process')
const host = "localhost";
const port = "8081";
const hghg = require('./hghg');
var server = http.createServer((req, res) => {
  // var c = new thisInTheReturnObject();
  // console.log(c.a());
  // thisInsideFunction(4,5);
  // thisInTheArrowedFunction();
  // thisInTheNestedObject();
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world");
  hghg.dog();
});

server.on("connection", socket => {});
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

function partitionedAvg(n, avgCB){
  
}


process.on('uncaughtException',(err)=>{
  console.error(err);
  process.exit(1);
})
