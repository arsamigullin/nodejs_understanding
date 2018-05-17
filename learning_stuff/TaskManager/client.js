const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();
const server = require('./serv')(client);

server.on('response',(resp)=>{
    console.log(resp);
});

rl.on('line', (input)=>{
    client.emit('command',input);
});