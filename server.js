var http = require("http");
//var process = require('./process')
const host = "localhost";
const port = "8081";
//console.dog();
var server = http.createServer((req, res) => {
  var typeOfReq = typeof req;
  const { headers, method, url } = req;
  let body = [];
  console.log(`Method: ${method}, Url: ${url}`);
  req.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  req.on('error', (err) => {
    console.error(err);
  });
  if (method === "POST" && url === "/echo") {
    req.pipe(res);
    // req
    //   .on("error", err => {
    //     console.log("the error happened while request");
    //   })
    //   .on("data", chunk => {
    //     body.push(chunk);
    //   })
    //   .on("end", () => {
    //     // At this point, we have the headers, method, url and body, and can now
    //     // do whatever we need to in order to respond to this request.
    //     body = Buffer.concat(body).toString();
    //   });
    // var c = new thisInTheReturnObject();
    // console.log(c.a());
    // //thisInsideFunction(4,5);
    // //thisInTheArrowedFunction();
    // //thisInTheNestedObject();
    // res.on("error", err => {
    //   console.log(err);
    // });
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "application/json");
    // const responseBody = { headers, method, url, body };
    // res.write(JSON.stringify(responseBody));
    // res.end("Hello world");
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.on("connection", socket => {});
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

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
    b: this.d
  };
}

function thisInTheNestedObject() {
  var o = { prop: 37 };
  function independent() {
    return this.prop;
  }
  o.f = independent;
  // console.log(o.f()); // 37

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
