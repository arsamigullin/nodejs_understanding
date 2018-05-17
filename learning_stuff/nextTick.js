const fs = require('fs');

function fileSize(filename, cb){
    if (typeof filename!='string'){
       return setImmediate(cb, new TypeError('argument should be string'));
       //return process.nextTick(cb, new TypeError('argument should be string')); // this async
       // return cb(new TypeError('argument should be string'))  This code is sync
    }

    fs.stat(filename, (err, stats)=>{
        if(err){
            return cb(err);
        }
        cb(null,stats.size);
    });
}

fileSize(1, (err,size)=>{
    if(err) throw err;
    console.log(`Size in kB: ${size/1024}`);
});
console.log('Hello!');