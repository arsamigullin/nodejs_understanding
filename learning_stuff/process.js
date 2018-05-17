// process is an instance of Event Emetter


process.on('exit', (code)=>{
    // do some opration before the process exit
    // we can only do synchronous operation inside this handler
    // we can't use an Event Loop here
    console.log(`About to exit with code: ${code}`)
});

process.on('uncaughtException', (err)=>{
// happens when some exception is not caught
// and it bubbles all the way to the event loop
// unlike exit handler, after rising this handler Node process will not exit
console.error(err);
process.exit(1);
});

// keep the event loop busy
process.stdin.resume();
//console.dog();