const express = require('express');
const app = express();
const jsPromise = require('./promises/jspromise');
const thisUnderstanding = require('./learning_stuff/thisUnderstanding');
const classInDepth = require('./learning_stuff/classesInDepth');

classInDepth.twoFunctionsOneObject();
classInDepth.oldFassionClasses();
thisUnderstanding.thisAndTernaryOperation();

var pr = jsPromise.jsPromiseTest()
.then(val=>{
    JSON.parse(val);
});

app.listen(3000, ()=>"Server is running")