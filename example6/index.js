module.exports = {
	returnsTrue: function(){
		return true;
	},

	add: function(a, b){
		return a + b;
	},

	asynchronouslyAdds: function(a, b, callback){
		setTimeout(function(){
			callback(a + b);
		}, 1000);
	}
}
