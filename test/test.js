/* global describe, it */
import CoverageBabel from '../src/index';
import chai from 'chai';

const expect = chai.expect; 
chai.should();

describe('CoverageBabel', () => {
	it('returns hello world message', () => {
		const cls = new CoverageBabel('Ben');
		cls.helloMessage().should.equal('hello Ben');
	});

	it('defaults name to batman', () => {
		const cls = new CoverageBabel();
		cls.helloMessage().should.equal('hello batman');
	});

	it('say hello', () => {
		const cls = new CoverageBabel();
		expect(cls.sayHello()).to.equals(undefined);
	});
});
