const EventEmitter = require('events');

class Server extends EventEmitter{
    constructor(client){
        super();
        process.nextTick(()=>{
            this.emit('response','Type a command ... ')
        });
        client.on('command',(command)=>{
            //console.log(`Command : ${command}`);
            switch(command){
                case 'help':
                case 'add':
                case 'ls':
                case 'delete':
                   this[command]();
                   break;
                default:
                this.emit('response','Unknown command ...');
            }
        });
    }
    help(){
        this.emit('response', 'help ...');
    }
    add(){
        this.emit('response', 'add ...');
    }
    ls(){
        this.emit('response', 'ls ...');
    }
    delete(){
        this.emit('response', 'delete ...');
    }

}

module.exports = (client)=>{return new Server(client)};
