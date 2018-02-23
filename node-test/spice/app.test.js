const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('app',() =>{
	var db = {
		saveUser: expect.createSpy()
	}
	app.__set__('db',db);
	it('it should called the spy correctly',() => {
		var spy = expect.createSpy();
		spy('prapall',2);
		expect(spy).toHaveBeenCalled('prapall',2);
	});
	
	it('it should save User with object',() => {
		var email = 'prapall@gmail.com';
		var password = 'prapall';
		db.handleSignUp(email,password);
		expect(db.saveUser).toHaveBeenCalledWith({email,password});
	});
	
})