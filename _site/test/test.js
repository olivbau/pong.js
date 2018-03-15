const assert = require('assert');
const Pong = require('..');

function test(value, expected) {
	assert.equal(value, expected);
	console.log(`Passed ${expected}`);
}

test(1, 1);
test(true, true);