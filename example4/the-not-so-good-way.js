var fs = require('fs');

var text = fs.readFileSync('./text.txt');

text += 'Andrew was here';

fs.writeFileSync('./text.txt', text);

console.log('done');
