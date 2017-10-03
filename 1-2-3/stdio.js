const stdin = process.stdin;
const stdout = process.stdout;

//stdin.on('data', data => stdout.write(data));

stdout.write('Hello What is your name?: ');
stdin.on('data', input => {
    const name = input.toString().trim();
    console.log('You type: ', name);
    const reversedName = name.split('').reverse().join('');
    stdout.write(`\n${name}, your name resvesed: ${reversedName}`);
    process.exit();
});

process.on('exit', () => stdout.write('\n\n\nGood look for learn Node!!!'));
