/* global describe, it */
// import babelute from 'babelute';
import htmlLexicon from 'babelute-html-lexicon';
import '../src/index';
import chai from 'chai';

const expect = chai.expect;

const h = htmlLexicon.initializer();

describe('atoms', () => {

	describe('empty tag', () => {

		const htmlString = h.tag('div')
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div></div>');
		});
	});

	describe('tag containing an empty tag', () => {

		const htmlString = h.tag('div', [h.tag('div')])
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div><div></div></div>');
		});
	});

	describe('tag containing a textnode', () => {

		const htmlString = h.tag('div', ['hello'])
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div>hello</div>');
		});
	});
	describe('tag containing a textnode from number', () => {

		const htmlString = h.tag('div', [123])
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div>123</div>');
		});
	});
	describe('tag containing a textnode (.text)', () => {

		const htmlString = h.tag('div', [h.text('hello')])
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div>hello</div>');
		});
	});
	describe('tag containing an undefined child', () => {

		const htmlString = h.tag('div', [undefined])
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div></div>');
		});
	});
	describe('tag containing a textnode and a empty tag', () => {

		const htmlString = h.tag('div', ['hello', h.tag('span')])
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div>hello<span></span></div>');
		});
	});

	describe('named div tag', () => {

		const htmlString = h.div()
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div></div>');
		});
	});
	describe('named div tag with class', () => {

		const htmlString = h.div(h.class('foo'))
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div class="foo"></div>');
		});
	});
	describe('named div tag with double class', () => {

		const htmlString = h.div(h.class('foo').class('bar'))
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div class="foo bar"></div>');
		});
	});
	describe('named div tag with classes', () => {

		const htmlString = h.div(h.classes('foo bar'))
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div class="foo bar"></div>');
		});
	});
	describe('named div tag with style', () => {

		const htmlString = h.div(h.style('backgroundColor', '#333'))
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div style="backgroundColor:#333;"></div>');
		});
	});

	describe('named div tag with data', () => {

		const htmlString = h.div(h.data('testVar', true))
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div data-test-var="true"></div>');
		});
	});

	describe('named div tag with prop', () => {

		const htmlString = h.div(h.prop('checked', true))
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div checked></div>');
		});
	});

	describe('named div tag with id', () => {

		const htmlString = h.div(h.id('zoo'))
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div id="zoo"></div>');
		});
	});
	describe('named div tag with attr', () => {

		const htmlString = h.div(h.attr('zoo', 123))
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div zoo="123"></div>');
		});
	});
	describe('named div tag with attr', () => {

		const htmlString = h.div(h.html('<span>bar</span>'))
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div><span>bar</span></div>');
		});
	});

	describe('named div tag with onString', () => {

		const htmlString = h.div(
				h.onString((tag) => {
					tag.attributes += ' foo';
				})
			)
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div foo></div>');
		});
	});
	describe('named div tag with container', () => {

		const htmlString = h.div(h.container(() => h.span('ho')))
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div><span>ho</span></div>');
		});
	});
	describe('self closing tag', () => {

		const htmlString = h.div(h.br())
			.$toHTMLString();

		it('return needed output', () => {
			expect(htmlString).equal('<div><br/></div>');
		});
	});
	// describe('named div tag with switchUse', () => {


	// 	const lexicon = htmlLexicon.createDialect('test');

	// 	babelute.registerLexicon(lexicon);

	// 	lexicon.addCompounds(() => {
	// 		return {
	// 			foo(arg) {
	// 				return this.span('foo:', arg);
	// 			},
	// 			bar(arg) {
	// 				return this.span('bar:', arg);
	// 			}
	// 		};
	// 	});

	// 	const htmlString = h.div(h.switchUse('test:foo', 1))
	// 		.$toHTMLString();

	// 	it('return needed output', () => {
	// 		expect(htmlString).equal('<div><span>foo:1</span></div>');
	// 	});
	// });


	// switchUse
	// container
});
/*
describe('bunch', () => {

	const htmlString = h.section(
			h.class('my-class')
			.h1('hello world')
			.div(h.id('my-id'), 'lorem ipsum...', h.p('...'))
		)
		.$toHTMLString();

	it('returns hello world message', () => {
		expect(htmlString).equal('');
	});

});
*/

