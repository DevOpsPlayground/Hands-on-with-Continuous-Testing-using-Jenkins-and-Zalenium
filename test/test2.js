var assert = require('assert');
describe('my webdriverio tests', function(){
	it('Github test',function() {
 		browser.url('https://ecs-digital.co.uk/careers')
 		const title = browser.getTitle();
 		console.log('Title was: ' + title);
		browser.pause(2000);
 		assert(title === 'ECS Digital – Your career within the world of digital transformation');
 	});
});
