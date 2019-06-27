const { showHelp } = require("./messaging");

const args = process.argv.slice(2);

if (args.includes('--help')) {
    console.log('my if statement is working');
    showHelp()
}

console.log(args);