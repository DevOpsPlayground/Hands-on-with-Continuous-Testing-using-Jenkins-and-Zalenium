var assert = require('assert');
describe('my webdriverio tests', function(){
	it('Github test',function() {
 		browser.url('http://www.google.com')
 		const title = browser.getTitle();
 		console.log('Title was: ' + title);
 		assert(title === 'Google');
 	});
});