var assert = require('assert');
describe('Google Test Suite', function(){
	it('Google Test 8',function() {
 		browser.url('http://www.google.com')
 		const title = browser.getTitle();
 		console.log('Title was: ' + title);
 		assert(title === 'Google');
 	});
});
