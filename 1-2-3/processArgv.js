function getValue(flag){
    const index = process.argv.indexOf(flag);
    return (index > - 1) ? process.argv[index + 1] : null
}


const message = getValue('-m') || 'hello';
const name = getValue('-n') || 'friend';


console.log(`${message}, ${name}`);