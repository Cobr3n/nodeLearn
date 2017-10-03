//Sync
const fs = require('fs');
console.log('Read dirrectory');
fs.readdir(__dirname, (error, contents) => {
    if(error) throw error;

    console.log(contents)
});

console.log('Finished readyns');