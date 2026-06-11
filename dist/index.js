"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=f(function(j,o){
var a=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-exp/dist'),l=require('@stdlib/math-base-special-ln/dist'),y=require('@stdlib/constants-float64-ninf/dist');function d(e,r,i){var n;return a(e)||a(r)||a(i)||i<=0?NaN:e===y?0:(n=(e-r)/i,-n-p(-n)-l(i))}o.exports=d
});var c=f(function(k,q){
var F=require('@stdlib/utils-constant-function/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-exp/dist'),z=require('@stdlib/math-base-special-ln/dist'),I=require('@stdlib/constants-float64-ninf/dist');function x(e,r){var i;if(v(e)||v(r)||r<=0)return F(NaN);return i=z(r),n;function n(u){var t;return v(u)?NaN:u===I?0:(t=(u-e)/r,-t-g(-t)-i)}}q.exports=x
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=s(),R=c();O(N,"factory",R);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
