var fs = require('fs');

var bufferFile = fs.readFileSync(process.argv[2]).toString()

var newlines = bufferFile.split('\n').length

console.log(--newlines);
