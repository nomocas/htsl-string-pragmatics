import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const pkg = require('./package.json');
// const external = ['babelute', 'babelute-html-lexicon']; // Object.keys(pkg.dependencies);

export default {
	entry: 'src/index.js',
	plugins: [
		babel(babelrc()),
		nodeResolve(),
		commonjs()
	],
	external: ['babelute', 'babelute-html-lexicon'],
	targets: [{
		dest: pkg.main,
		format: 'cjs',
		sourceMap: true
	}, {
		dest: pkg.module,
		format: 'es',
		sourceMap: true
	}]
};

