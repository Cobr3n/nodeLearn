const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('start', (message) => console.log(message));
//emitter.once('start', (message) => console.log(message)); Только 1 раз

emitter.emit('start', 'started');
emitter.removeAllListeners();
emitter.emit('start', 'started2');