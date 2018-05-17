const express = require('express');
const app = express();

app.post('/', (req,res)=>{
    req.on('data', (chunk)=>{
        console.log('I received ther Post Req');
    });
    res.send('hello world');
});

app.listen(8081, ()=>{console.log('Server is running on 8081')});