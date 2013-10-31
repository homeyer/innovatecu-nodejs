var fs = require('fs');

fs.readFile('./text.txt', function(err, data){

	var text = data + 'Andrew was here';

	fs.writeFile('./text.txt', text, function(){
		console.log('done');
	});
});

