const expect = require('expect');
const utils = require('./utils');

//it('should add two numbers',() => {
//	var res = utils.add(12,24);
//	throw new Error('Values not Right');	
//	if(res!==36){
//		throw new Error(`Expcted 36 bt got ${res}`);
//	}
//});

describe('utils', () => {
	describe('#add', () => {
		it('should add two numbers', () => {
			var res = utils.add(12, 24);
			expect(res).toBe(36);
			//expect(res).toBe(36).toBeA('number');
		});
	})
	it('should square numbers', () => {
		var res = utils.sqr(3);
		expect(res).toBe(9);
		//expect(res).toBe(9).toBeA('number');
	});

	it('should async two numbers', (done) => {
		utils.asynAdd(4, 3, (sum) => {
			expect(sum).toBe(7);
			done();
		});
	});

	it('should async squre number', (done) => {
		utils.asynSqr(4, (sqr) => {
			expect(sqr).toBe(16);
			done();
		});
	})

})


//it('should set firstName and lastName', () =>{
//	var user = {location:'Pune',age:25};
//	var res = utils.setName(user,'Pallavi Prasad');
//	expect(user).toEqual(res);
//	expect(res).toInclude({
//		firstName: 'Pallavi',
//		lastName: 'Prasad'
//	});
//});


//it('Should expect some values', () => {
//	expect(12).notToBe(12);
//	expect({name:'prapall'}).toEqual({name:'prapall'});
//	expect({name:'prapall'}).toNotEqual({name:'prapall'});
//	expect([1, 2, 3]).toInclude(3);
//	expect([1, 2, 3]).toExclude(4);
//	expect({
//		name: 'prapall',
//		age: 25,
//		address: 'Pune'
//	}).toInclude({
//		age: 25
//	})
//	expect({
//		name: 'prapall',
//		age: 25,
//		address: 'Pune'
//	}).toExclude({
//		age: 23
//	})
//});