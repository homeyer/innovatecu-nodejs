var request = require('request');
var fs = require('fs');

request('http://thecatapi.com/api/images/get')
  .pipe(fs.createWriteStream('./cat.jpg'));
