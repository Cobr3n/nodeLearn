const fs = require('fs');

const strem = fs.createReadStream('read.txt' , 'utf-8');
const output = fs.createWriteStream('lorem.md');

let data = '';


strem.on('data', part => output.write(part));

strem.on('error', (error) => console.log('Error', error.message));


