/**
 ************* HTML-to-String Actions ***********
 *
 * @author Gilles Coomans
 * @licence MIT
 * @copyright 2016-2017 Gilles Coomans
 */

import babelute from 'babelute';
import htmlLexicon from 'htsl-lexicon'; // external
import toSlugCase from 'to-slug-case'; // for data-* attributes
import htmlSpecialChars from 'nomocas-utils/lib/string/html-special-chars'; // for safe string output

const $baseOutput = babelute.FacadePragmatics.prototype.$output;

/**
 * html-to-string pragmatics
 * @type {FacadePragmatics}
 * @public
 * @example
 * import stringPragmas from 'htsl/src/html-to-string.js';
 * import htmlLexicon from 'htsl/src/html-lexicon.js';
 *
 * const h = htmlLexicon.initializer;
 * const sentence = h.div(state.intro).section(h.class('my-section').h1(state.title));
 * 
 * var stringOutput = stringPragmas.$output(null, sentence);
 */
const stringPragmas = babelute.createFacadePragmatics({
	html: true
}, {
	// we only need logical atoms definitions. (without user interactions. aka click etc.)
	tag(tag, args /* tagName, babelutes */ , component) {
		const child = new TagDescriptor(),
			babelutes = args[1];
		let templ;
		if (babelutes)
			for (let i = 0, len = babelutes.length; i < len; ++i) {
				templ = babelutes[i];
				if (typeof templ === 'undefined')
					continue;
				if (templ && templ.__babelute__)
					this.$output(child, templ, component);
				else if (typeof templ === 'string')
					child.children += htmlSpecialChars.encode(templ); //.replace(/</g, '&lt;').replace(/>/g, '&gt;');
				else
					child.children += templ;
			}
		tagOutput(tag, child, args[0]);
	},

	text(tag, args /* value */ ) {
		tag.children += htmlSpecialChars.encode(args[0]);
	},

	class(tag, args /* className */ ) {
		if (args[0] && (args.length === 1 || args[1]))
			tag.classes += (tag.classes ? ' ' : '') + args[0];
	},

	classes(tag, args /* className */ ) {
		tag.classes += (tag.classes ? ' ' : '') + args[0];
	},

	style(tag, args /* name, value  */ ) {
		tag.style += args[0] + ':' + args[1] + ';';
	},

	prop(tag, args) {
		if (args[1])
			tag.attributes += ' ' + args[0];
	},

	data(tag, args) {
		const name = 'data-' + toSlugCase(args[0]),
			value = args[1],
			hasValue = typeof value !== 'undefined';
		tag.attributes += ' ' + name + (hasValue ? ('="' + value + '"') : '');
	},

	attr(tag, args /* name, value */ ) {
		const value = args[1];
		// tag.attributes += ' ' + args[0] + '="' + (typeof value === 'string' ? encodeHtmlSpecialChars(value) : value) + '"';
		tag.attributes += ' ' + args[0] + '="' + (typeof value === 'string' ? value.replace(/"/g, '\\"')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;') : value) + '"';
	},

	id(tag, args /* value */ ) {
		tag.attributes = ' id="' + args[0] + '"' + tag.attributes;
	},

	html(tag, args) {
		tag.children += args[0]; // TODO : should be sanitize
	},

	onString(tag, args /* render */ , component) {
		const onRender = args[0];
		if (onRender)
			onRender(tag, component);
	},

	ref(tag, args, component) {
		component[args[0]] = tag;
	},

	component(descriptor, args, parent) {
		const Class = args[0],
			props = args[1],
			instance = new Class(props, parent);
		this.$output(descriptor, instance.render(false), instance);
	},

	postalComponent() {
		// nothing to do
	},

	container(descriptor, args, parent) {
		this.$output(descriptor, args[0]({ unmount() {} }), parent);
	},
	switchUse(descriptor, args, parent) {
		const b = new babelute.Babelute()._use(args[0], ...(args[1]));
		this.$output(descriptor, b, parent);
	},

	$output(tag, babelute, component) {
		return $baseOutput.call(this, tag || new TagDescriptor(), babelute, component).children;
	}
});

// for tags string construction
class TagDescriptor {
	constructor() {
		this.children = '';
		this.classes = '';
		this.style = '';
		this.attributes = '';
	}
}

const selfClosingTags = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)/;

// TagDescriptor-to-string output
function tagOutput(parent, tag, name) {
	let out = '<' + name + tag.attributes;
	if (tag.style)
		out += ' style="' + tag.style + '"';
	if (tag.classes)
		out += ' class="' + tag.classes + '"';
	if (tag.children)
		parent.children += out + '>' + tag.children + '</' + name + '>';
	else if (selfClosingTags.test(name))
		parent.children += out + '/>';
	else
		parent.children += out + '></' + name + '>';
}

htmlLexicon.addAliases({
	$toHTMLString(domElement) {
		return stringPragmas.$output(domElement, this);
	}
});

export default stringPragmas;

