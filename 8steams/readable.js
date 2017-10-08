const fs = require('fs');

const strem = fs.createReadStream('read.txt' , 'utf-8');

let data = '';


strem.on('data', part => data += part);

strem.on('end', () => console.log('End', data.length, 'KB'));
strem.on('error', (error) => console.log('Error', error.message));


