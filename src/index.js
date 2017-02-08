import { Foo } from './foo';

new Foo().doSomething('john'); // just for coverage test

export default class CoverageBabel {
	constructor (name='batman') {
		this.name = name;
	}

	helloMessage () {
		const msg = `hello ${this.name}`;
		return msg;
	}

	sayHello () {
		console.log(this.helloMessage()); // eslint-disable-line no-console
	}
}
