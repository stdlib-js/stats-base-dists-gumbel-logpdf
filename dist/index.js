"use strict";var f=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=f(function(j,o){
var a=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-exp/dist'),l=require('@stdlib/math-base-special-ln/dist'),y=require('@stdlib/constants-float64-ninf/dist');function d(i,r,e){var n;return a(i)||a(r)||a(e)||e<=0?NaN:i===y?0:(n=(i-r)/e,-n-p(-n)-l(e))}o.exports=d
});var c=f(function(k,q){
var F=require('@stdlib/utils-constant-function/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-exp/dist'),z=require('@stdlib/math-base-special-ln/dist'),I=require('@stdlib/constants-float64-ninf/dist');function x(i,r){var e;if(v(i)||v(r)||r<=0)return F(NaN);return e=z(r),n;function n(u){var t;return v(u)?NaN:u===I?0:(t=(u-i)/r,-t-g(-t)-e)}}q.exports=x
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=s(),R=c();O(N,"factory",R);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
