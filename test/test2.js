var assert = require('assert');
describe('my webdriverio tests', function(){
	it('Github test',function() {
 		browser.url('https://ecs-digital.co.uk/careers')
 		const title = browser.getTitle();
 		console.log('Title was: ' + title);
 		assert(title === 'Careers');
 	});
});
