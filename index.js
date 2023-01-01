// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,f){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=f.value,t.__proto__=c):t[n]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,n,f.get),p&&i&&i.call(t,n,f.set),t};function c(t,n,r){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return t!=t}var y=Math.floor,p=Math.ceil;function v(t){return t<0?p(t):y(t)}var b=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,d=1023;function w(t){return t===s||t===b}var A,_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,h=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"",g=_&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return m.call(t);r=t[U],i=U,n=null!=(o=t)&&h.call(o,i);try{t[U]=void 0}catch(n){return m.call(t)}return e=m.call(t),n?t[U]=r:delete t[U],e}:function(t){return m.call(t)},j="function"==typeof Uint32Array,N="function"==typeof Uint32Array?Uint32Array:null,I="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var t,n,r;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(j&&r instanceof Uint32Array||"[object Uint32Array]"===g(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?I:function(){throw new Error("not implemented")};var O,S=A,E="function"==typeof Float64Array,F="function"==typeof Float64Array?Float64Array:null,T="function"==typeof Float64Array?Float64Array:void 0;O=function(){var t,n,r;if("function"!=typeof F)return!1;try{n=new F([1,3.14,-3.14,NaN]),r=n,t=(E&&r instanceof Float64Array||"[object Float64Array]"===g(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?T:function(){throw new Error("not implemented")};var H,G=O,P="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var t,n,r;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),r=n,t=(P&&r instanceof Uint8Array||"[object Uint8Array]"===g(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?L:function(){throw new Error("not implemented")};var V,W=H,M="function"==typeof Uint16Array,k="function"==typeof Uint16Array?Uint16Array:null,Y="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var t,n,r;if("function"!=typeof k)return!1;try{n=new k(n=[1,3.14,-3.14,65536,65537]),r=n,t=(M&&r instanceof Uint16Array||"[object Uint16Array]"===g(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?Y:function(){throw new Error("not implemented")};var C,q={uint16:V,uint8:W};(C=new q.uint16(1))[0]=4660;var z,B,D=52===new q.uint8(C.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new G(1),Q=new S(K.buffer),R=J.HIGH,X=J.LOW;function Z(t,n,r,e){return K[0]=t,n[e]=Q[R],n[e+r]=Q[X],n}function $(t){return Z(t,[0,0],1,0)}c($,"assign",Z);var tt,nt,rt=!0===D?1:0,et=new G(1),ot=new S(et.buffer);function it(t){return et[0]=t,ot[rt]}!0===D?(tt=1,nt=0):(tt=0,nt=1);var ut={HIGH:tt,LOW:nt},at=new G(1),ft=new S(at.buffer),ct=ut.HIGH,lt=ut.LOW;function yt(t,n){return ft[ct]=t,ft[lt]=n,at[0]}var pt=[0,0];function vt(t,n,r,e){return l(t)||w(t)?(n[e]=t,n[e+r]=0,n):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}c((function(t){return vt(t,[0,0],1,0)}),"assign",vt);var bt=[0,0],st=[0,0];function dt(t,n){var r,e,o,i,u,a;return 0===n||0===t||l(t)||w(t)?t:(vt(t,bt,1,0),n+=bt[1],n+=function(t){var n=it(t);return(n=(2146435072&n)>>>20)-d|0}(t=bt[0]),n<-1074?(o=0,i=t,$.assign(o,pt,1,0),u=pt[0],u&=2147483647,a=it(i),yt(u|=a&=2147483648,pt[1])):n>1023?t<0?b:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,$.assign(t,st,1,0),r=st[0],r&=2148532223,e*yt(r|=n+d<<20,st[1])))}var wt=1.4426950408889634,At=1/(1<<28);function _t(t){var n;return l(t)||t===s?t:t===b?0:t>709.782712893384?s:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<At?1+t:function(t,n,r){var e,o,i,u;return dt(1-(n-(e=t-n)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),r)}(t-.6931471803691238*(n=v(t<0?wt*t-.5:wt*t+.5)),1.9082149292705877e-10*n,n)}var mt=!0===D?1:0,ht=new G(1),Ut=new S(ht.buffer),gt=.6931471803691238,jt=1.9082149292705877e-10,Nt=1048575;function It(t){var n,r,e,o,i,u,a,f,c,y,p,v;return 0===t?b:l(t)||t<0?NaN:(i=0,(r=it(t))<1048576&&(i-=54,r=it(t*=0x40000000000000)),r>=2146435072?t+t:(i+=(r>>20)-d|0,i+=(f=614244+(r&=Nt)&1048576|0)>>20|0,a=(t=function(t,n){return ht[0]=t,Ut[mt]=n>>>0,ht[0]}(t,r|1072693248^f))-1,(Nt&2+r)<3?0===a?0===i?0:i*gt+i*jt:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*gt-(u-i*jt-a)):(f=r-398458|0,c=440401-r|0,o=(p=(v=(y=a/(2+a))*y)*v)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(p),e=v*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(p),u=e+o,(f|=c)>0?(n=.5*a*a,0===i?a-(n-y*(n+u)):i*gt-(n-(y*(n+u)+i*jt)-a)):0===i?a-y*(a-u):i*gt-(y*(a-u)-i*jt-a))))}function Ot(t,n,r){var e;return l(t)||l(n)||l(r)||r<=0?NaN:t===b?0:-(e=(t-n)/r)-_t(-e)-It(r)}return c(Ot,"factory",(function(t,n){var r,e;return l(t)||l(n)||n<=0?(e=NaN,function(){return e}):(r=It(n),function(e){var o;return l(e)?NaN:e===b?0:-(o=(e-t)/n)-_t(-o)-r})})),Ot},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).logpdf=n();
//# sourceMappingURL=index.js.map
