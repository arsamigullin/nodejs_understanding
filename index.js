const express = require('express');
const app = express();
const jsPromise = require('./promises/jspromise');
const thisUnderstanding = require('./learning_stuff/thisUnderstanding');

thisUnderstanding.thisAndTernaryOperation();

var pr = jsPromise.jsPromiseTest()
.then(val=>{
    JSON.parse(val);
});

app.listen(3000, ()=>"Server is running")