var http = require("http");
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
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

function partitionedAvg(n, avgCB){
  
}


function thisInsideFunction(id, num) {
  this.id = id;
  this.num = num;
  this.getTotalNum = function() {
    return this.id + " " + this.num;
  };
}

function thisInTheArrowedFunction() {
  var globalObject = this;
  var foo = () => this;
  console.log(foo() === globalObject);
  var obj = { foo: foo };
  console.log(foo.call(obj) == globalObject);
  foo = foo.bind(obj);
  console.log(foo() == globalObject);
}

function thisInTheReturnObject() {
  this.d = 37;
  return {
    a: function() {
      return this.b;
    },
    b : this.d
  };
}

function thisInTheNestedObject() {
  var o = { prop: 37 };
  function independent() {
    return this.prop;
  }
  o.f = independent;
  console.log(o.f()); // 37

  o.b = { g: independent, prop: 42 };
  console.log(o.b.g()); // logs 42

  var globalObject = this;
  var b = {
    bar: function() {
      return this;
    }
  };
  var f = b.bar();
  console.log(f() == globalObject);
}

process.on('uncaughtException',(err)=>{
  console.error(err);
  process.exit(1);
})
