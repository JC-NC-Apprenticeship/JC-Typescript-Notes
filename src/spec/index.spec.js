const { expect } = require('chai');
import testJH from '../index';

describe('testJH', () => {
	it('should equal test', () => {
		expect(testJH()).to.equal('Test');
	});
});
