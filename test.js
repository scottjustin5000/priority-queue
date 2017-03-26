'use strict'
let Queue = require('./');

describe('Test Dijkstras', function() {

	it('should enqueue and maintain priority', function(done) {
		
		let q = new Queue();
		q.enqueue({foo: 'bar'}, 'foo_bar', 10);
		q.enqueue({foo: 'bu'}, 'foo_bu', 5);
		q.enqueue({foo: 'best'}, 'foo_best', 1);
		q.should.have.property('nodes');
		q.nodes.should.have.property('length', 3);
		q.nodes[0].key = 'foo_best';
		done();
	});

	it('should dequeue and maintain priority', function(done) {
		
		let q = new Queue();
		q.enqueue({foo: 'bar'}, 'foo_bar', 10);
		q.enqueue({foo: 'bu'}, 'foo_bu', 5);
		q.enqueue({foo: 'best'}, 'foo_best', 1);
		q.should.have.property('nodes');
		q.dequeue('foo_best');
		q.nodes[0].key = 'foo_bu';
		done();
	});

	it('should search and find by key', function(done) {
		
		let q = new Queue();
		q.enqueue({foo: 'bar'}, 'foo_bar', 10);
		q.enqueue({foo: 'bu'}, 'foo_bu', 5);
		q.enqueue({foo: 'best'}, 'foo_best', 1);
		const v = q.search('foo_bar');
		v.should.have.property('priority', 10);
		done();
	});
});