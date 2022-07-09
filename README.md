<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Logarithm of Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Gumbel][gumbel-distribution] distribution logarithm of [probability density function (PDF)][pdf].

<section class="intro">

The [probability density function][pdf] (PDF) for a [Gumbel][gumbel-distribution] random variable is

<!-- <equation class="equation" label="eq:gumbel_pdf" align="center" raw="f(x;\mu,\beta) = \frac{1}{\beta}e^{-\left( \frac{x-\mu}{\beta}+e^{- \frac{x-\mu}{\beta}}\right)}" alt="Probability density function (PDF) for a Gumbel distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\mu,\beta) = \frac{1}{\beta}e^{-\left( \frac{x-\mu}{\beta}+e^{- \frac{x-\mu}{\beta}}\right)}" data-equation="eq:gumbel_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/gumbel/logpdf/docs/img/equation_gumbel_pdf.svg" alt="Probability density function (PDF) for a Gumbel distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the location parameter and `beta > 0` is the scale parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import logpdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-logpdf@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-logpdf@deno/mod.js';
```

#### logpdf( x, mu, beta )

Evaluates the logarithm of the [probability density function][pdf] (PDF) for a [Gumbel][gumbel-distribution] distribution with parameters `mu` (location parameter) and `beta > 0` (scale parameter).

```javascript
var y = logpdf( 0.0, 0.0, 2.0 );
// returns ~-1.693

y = logpdf( 0.0, 0.0, 1.0 );
// returns ~-1

y = logpdf( 1.0, 3.0, 2.0 );
// returns ~-2.411
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 0.0, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 0.0, -1.0 );
// returns NaN

y = logpdf( 2.0, 8.0, 0.0 );
// returns NaN
```

#### logpdf.factory( mu, beta )

Returns a `function` for evaluating the logarithm of the [PDF][pdf] (PDF) for a [Gumbel][gumbel-distribution] distribution with parameters `mu` (location parameter) and `beta > 0` (scale parameter).

```javascript
var mylogpdf = logpdf.factory( 10.0, 2.0 );

y = mylogpdf( 10.0 );
// returns ~-1.693

y = mylogpdf( 12.0 );
// returns ~-2.061
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import logpdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-logpdf@deno/mod.js';

var beta;
var mu;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    mu = randu() * 10.0;
    beta = randu() * 10.0;
    y = logpdf( x, mu, beta );
    console.log( 'x: %d, µ: %d, β: %d, ln(f(x;µ,β)): %d', x, mu, beta, y );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-gumbel-logpdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-gumbel-logpdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-gumbel-logpdf/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-logpdf/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-gumbel-logpdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-gumbel-logpdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-gumbel-logpdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-gumbel-logpdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-logpdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-logpdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-logpdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-logpdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-gumbel-logpdf/main/LICENSE

[gumbel-distribution]: https://en.wikipedia.org/wiki/Gumbel_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
