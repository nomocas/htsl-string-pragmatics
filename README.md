# htsl-string-pragmatics

[![Travis branch](https://img.shields.io/travis/nomocas/htsl-string-pragmatics/master.svg)](https://travis-ci.org/nomocas/htsl-string-pragmatics)
[![bitHound Overall Score](https://www.bithound.io/github/nomocas/htsl-string-pragmatics/badges/score.svg)](https://www.bithound.io/github/nomocas/htsl-string-pragmatics)
[![Coverage Status](https://coveralls.io/repos/github/nomocas/htsl-string-pragmatics/badge.svg?branch=master)](https://coveralls.io/github/nomocas/htsl-string-pragmatics?branch=master)
[![bitHound Dependencies](https://www.bithound.io/github/nomocas/htsl-string-pragmatics/badges/dependencies.svg)](https://www.bithound.io/github/nomocas/htsl-string-pragmatics/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/nomocas/htsl-string-pragmatics/badges/devDependencies.svg)](https://www.bithound.io/github/nomocas/htsl-string-pragmatics/master/dependencies/npm)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![npm](https://img.shields.io/npm/v/htsl-string-pragmatics.svg)]()
[![licence](https://img.shields.io/npm/l/htsl-string-pragmatics.svg)](https://spdx.org/licenses/MIT)
<!-- [![npm-downloads](https://img.shields.io/npm/dm/htsl-string-pragmatics.svg)]() -->

Simple String engine for [htsl-lexicon](https://github.com/nomocas/htsl-lexicon).

Look there for full docs.

## Usage

```
yarn add babelute htsl-lexicon htsl-string-pragmatics
```

```javascript
import htmlLexicon from 'htsl-lexicon';
import 'htsl-string-pragmatics';

const h = htmlLexicon.initializer();

const htmlString = h.section(
	h.class('my-class')
	.h1('hello world')
	.div(h.id('my-id'), 'lorem ipsum...', h.p('...'))
	.button('fire !', ...)
)
.$toHTMLString();
```

## Licence

The [MIT](http://opensource.org/licenses/MIT) License

Copyright 2017 (c) Gilles Coomans

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
