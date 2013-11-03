// npm install -g mocha
// npm install chai

var chai = require('chai');
chai.should();

var example = require('./index');

describe('example 6', function(){

	describe('isTrue', function(){

		it('should return true if I pass true', function(){
			example.isTrue(true).should.be.true;
		});

		it('should return true for objects', function(){
			example.isTrue({}).should.be.true;
		});

	});

	describe('add', function(){

		it('should add the first two params', function(){
			//todo
		});

	});

	describe('asynchronouslyAdds', function(){
		it('should add the first two params', function(done){
			var a = 2, b = 3;

			example.asynchronouslyAdds(a, b, function(result){
				result.should.equal(5);
				done();
			});

		});

	});

});
