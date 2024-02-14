// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function a(r,t,e){var a=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,a&&(r="-"+r)),r}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=a(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=a(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function A(r){var t,n,a=parseFloat(r.arg);if(!isFinite(a)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);a=r.arg}switch(r.specifier){case"e":case"E":n=a.toExponential(r.precision);break;case"f":case"F":n=a.toFixed(r.precision);break;case"g":case"G":f(a)<1e-4?((t=r.precision)>0&&(t-=1),n=a.toExponential(t)):n=a.toPrecision(r.precision),r.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,w,"e"),n=s.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,d,"e-0$1"),r.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,h,"$1.e")),a>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):l.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function F(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var I=String.fromCharCode,N=isNaN,_=Array.isArray;function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,i,o,f,l,p,s;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,p=0;p<r.length;p++)if(u(n=r[p]))f+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,N(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!N(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(o)?String(n.arg):I(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=F(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,a;for(e=[],a=0,n=U.exec(r);n;)(t=r.slice(a,U.lastIndex-n[0].length)).length&&e.push(t),e.push(j(n)),a=U.lastIndex,n=U.exec(r);return(t=r.slice(a)).length&&e.push(t),e}function T(r){return"string"==typeof r}function k(r){var t,e;if(!T(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return S.apply(null,t)}var O=Object.prototype,V=O.toString,H=O.__defineGetter__,G=O.__defineSetter__,W=O.__lookupGetter__,$=O.__lookupSetter__,L=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,a,i,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((a="value"in e)&&(W.call(r,t)||$.call(r,t)?(n=r.__proto__,r.__proto__=O,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,o="set"in e,a&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&H&&H.call(r,t,e.get),o&&G&&G.call(r,t,e.set),r};function P(r,t,e){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function C(r){return r!=r}var R=Math.floor,Z=Math.ceil;function M(r){return r<0?Z(r):R(r)}var Y=Number.NEGATIVE_INFINITY,X=Number.POSITIVE_INFINITY,z=Number.POSITIVE_INFINITY,q=1023,B=Number.POSITIVE_INFINITY;function D(r){return r===B||r===Y}var J,K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,tr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof tr?tr.toStringTag:"",nr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,a,i;if(null==r)return Q.call(r);e=r[er],i=er,t=null!=(a=r)&&rr.call(a,i);try{r[er]=void 0}catch(t){return Q.call(r)}return n=Q.call(r),t?r[er]=e:delete r[er],n}:function(r){return Q.call(r)},ar="function"==typeof Uint32Array,ir="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,t,e;if("function"!=typeof ir)return!1;try{t=new ir(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(ar&&e instanceof Uint32Array||"[object Uint32Array]"===nr(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var cr,ur=J,fr="function"==typeof Float64Array,lr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,t,e;if("function"!=typeof lr)return!1;try{t=new lr([1,3.14,-3.14,NaN]),e=t,r=(fr&&e instanceof Float64Array||"[object Float64Array]"===nr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr,yr=cr,dr="function"==typeof Uint8Array,gr="function"==typeof Uint8Array?Uint8Array:null,hr="function"==typeof Uint8Array?Uint8Array:void 0;sr=function(){var r,t,e;if("function"!=typeof gr)return!1;try{t=new gr(t=[1,3.14,-3.14,256,257]),e=t,r=(dr&&e instanceof Uint8Array||"[object Uint8Array]"===nr(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var vr,wr=sr,br="function"==typeof Uint16Array,Ar="function"==typeof Uint16Array?Uint16Array:null,mr="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,t,e;if("function"!=typeof Ar)return!1;try{t=new Ar(t=[1,3.14,-3.14,65536,65537]),e=t,r=(br&&e instanceof Uint16Array||"[object Uint16Array]"===nr(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Fr,Ir={uint16:vr,uint8:wr};(Fr=new Ir.uint16(1))[0]=4660;var Nr,_r,Er=52===new Ir.uint8(Fr.buffer)[0];!0===Er?(Nr=1,_r=0):(Nr=0,_r=1);var Sr={HIGH:Nr,LOW:_r},Ur=new yr(1),jr=new ur(Ur.buffer),xr=Sr.HIGH,Tr=Sr.LOW;function kr(r,t,e,n){return Ur[0]=r,t[n]=jr[xr],t[n+e]=jr[Tr],t}function Or(r){return kr(r,[0,0],1,0)}P(Or,"assign",kr);var Vr,Hr="function"==typeof Float64Array,Gr="function"==typeof Float64Array?Float64Array:null,Wr="function"==typeof Float64Array?Float64Array:void 0;Vr=function(){var r,t,e;if("function"!=typeof Gr)return!1;try{t=new Gr([1,3.14,-3.14,NaN]),e=t,r=(Hr&&e instanceof Float64Array||"[object Float64Array]"===nr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var $r=!0===Er?1:0,Lr=new Vr(1),Pr=new ur(Lr.buffer);function Cr(r){return Lr[0]=r,Pr[$r]}var Rr,Zr,Mr,Yr="function"==typeof Float64Array,Xr="function"==typeof Float64Array?Float64Array:null,zr="function"==typeof Float64Array?Float64Array:void 0;Rr=function(){var r,t,e;if("function"!=typeof Xr)return!1;try{t=new Xr([1,3.14,-3.14,NaN]),e=t,r=(Yr&&e instanceof Float64Array||"[object Float64Array]"===nr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?zr:function(){throw new Error("not implemented")},!0===Er?(Zr=1,Mr=0):(Zr=0,Mr=1);var qr={HIGH:Zr,LOW:Mr},Br=new Rr(1),Dr=new ur(Br.buffer),Jr=qr.HIGH,Kr=qr.LOW;function Qr(r,t){return Dr[Jr]=r,Dr[Kr]=t,Br[0]}var rt=[0,0];function tt(r,t,e,n){return C(r)||D(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}P((function(r){return tt(r,[0,0],1,0)}),"assign",tt);var et,nt,at,it="function"==typeof Float64Array,ot="function"==typeof Float64Array?Float64Array:null,ct="function"==typeof Float64Array?Float64Array:void 0;et=function(){var r,t,e;if("function"!=typeof ot)return!1;try{t=new ot([1,3.14,-3.14,NaN]),e=t,r=(it&&e instanceof Float64Array||"[object Float64Array]"===nr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ct:function(){throw new Error("not implemented")},!0===Er?(nt=1,at=0):(nt=0,at=1);var ut={HIGH:nt,LOW:at},ft=new et(1),lt=new ur(ft.buffer),pt=ut.HIGH,st=ut.LOW;function yt(r,t,e,n){return ft[0]=r,t[n]=lt[pt],t[n+e]=lt[st],t}function dt(r){return yt(r,[0,0],1,0)}P(dt,"assign",yt);var gt=[0,0],ht=[0,0];function vt(r,t){var e,n,a,i,o,c;return 0===t||0===r||C(r)||D(r)?r:(tt(r,gt,1,0),t+=gt[1],t+=function(r){var t=Cr(r);return(t=(2146435072&t)>>>20)-q|0}(r=gt[0]),t<-1074?(a=0,i=r,Or.assign(a,rt,1,0),o=rt[0],o&=2147483647,c=Cr(i),Qr(o|=c&=2147483648,rt[1])):t>1023?r<0?Y:z:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,dt.assign(r,ht,1,0),e=ht[0],e&=2148532223,n*Qr(e|=t+q<<20,ht[1])))}var wt=1.4426950408889634,bt=1/(1<<28);function At(r){var t;return C(r)||r===X?r:r===Y?0:r>709.782712893384?X:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<bt?1+r:function(r,t,e){var n,a,i,o;return vt(1-(t-(n=r-t)*(i=n-(a=n*n)*(0===(o=a)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),e)}(r-.6931471803691238*(t=M(r<0?wt*r-.5:wt*r+.5)),1.9082149292705877e-10*t,t)}var mt,Ft="function"==typeof Float64Array,It="function"==typeof Float64Array?Float64Array:null,Nt="function"==typeof Float64Array?Float64Array:void 0;mt=function(){var r,t,e;if("function"!=typeof It)return!1;try{t=new It([1,3.14,-3.14,NaN]),e=t,r=(Ft&&e instanceof Float64Array||"[object Float64Array]"===nr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Nt:function(){throw new Error("not implemented")};var _t=!0===Er?1:0,Et=new mt(1),St=new ur(Et.buffer),Ut=.6931471803691238,jt=1.9082149292705877e-10,xt=1048575;function Tt(r){var t,e,n,a,i,o,c,u,f,l,p,s;return 0===r?Y:C(r)||r<0?NaN:(i=0,(e=Cr(r))<1048576&&(i-=54,e=Cr(r*=0x40000000000000)),e>=2146435072?r+r:(i+=(e>>20)-q|0,i+=(u=614244+(e&=xt)&1048576|0)>>20|0,c=(r=function(r,t){return Et[0]=r,St[_t]=t>>>0,Et[0]}(r,e|1072693248^u))-1,(xt&2+e)<3?0===c?0===i?0:i*Ut+i*jt:(o=c*c*(.5-.3333333333333333*c),0===i?c-o:i*Ut-(o-i*jt-c)):(u=e-398458|0,f=440401-e|0,a=(p=(s=(l=c/(2+c))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),n=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=n+a,(u|=f)>0?(t=.5*c*c,0===i?c-(t-l*(t+o)):i*Ut-(t-(l*(t+o)+i*jt)-c)):0===i?c-l*(c-o):i*Ut-(l*(c-o)-i*jt-c))))}function kt(r,t,e){var n;return C(r)||C(t)||C(e)||e<=0?NaN:r===Y?0:-(n=(r-t)/e)-At(-n)-Tt(e)}return P(kt,"factory",(function(r,t){var e,n;return C(r)||C(t)||t<=0?(n=NaN,function(){return n}):(e=Tt(t),function(n){var a;return C(n)?NaN:n===Y?0:-(a=(n-r)/t)-At(-a)-e})})),kt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=t();
//# sourceMappingURL=index.js.map
