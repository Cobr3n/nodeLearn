const fs = require('fs');

const zlib = require('zlib');

const input = fs.createReadStream('read.txt' , 'utf-8');
const output = fs.createWriteStream('loremPipe.md');
const gzip = zlib.createGzip();

let data = '';


input.pipe(gzip).pipe(output);



class ReadStream{
    pipe(stream){
        this.on('data', part => stream.write(part))
        return stream;
    }
}

