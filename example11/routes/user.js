var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	name: String
});

var User = mongoose.model('User', userSchema);



/*
 * GET users listing.
 */

exports.list = function(req, res){
	User.find(function(err, users) {
		//should check error and return something else if there was an error, but we wont

		res.json(users); //list of users
	});
};

exports.create = function(req, res) {
	var user = new User({name: req.body.name || 'Anonymous'});
	user.save(function(err, user) {
		//should check error and return something else if there was an error, but we wont

		res.redirect('/'); //success
	});
};