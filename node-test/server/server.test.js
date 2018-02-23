const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('server', () => {
	describe('GET/', () => {
		it('It should return the hello wrold response', (done) => {
			request(app)
				.get('/')
				//	.expect(200)
				.expect(404)
				//	.expect('Helllo world')
				//	.expect({
				//		 error : 'Page not found'
				//	 })
				.expect((res) => {
					expect(res.body).toInclude({
						error: 'Page not found'
					})
				})
				.end(done);
		});
	})
	describe('GET/users', () => {
		it('It should return the name and age', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						name: 'prapall',
						age: 2
					})
				})
				.end(done);
		});
	})
})