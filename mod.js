// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,u=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,n,t.get),v&&u&&u.call(r,n,t.set),r},y=n()?c:l;var v=function(r,n,t){y(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},b=Math.floor,w=Math.ceil,A=b,_=w;var m=function(r){return r<0?_(r):A(r)},d=Number.NEGATIVE_INFINITY,U=Number.POSITIVE_INFINITY,h=U,s=d;var N=function(r){return r===h||r===s};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var g=function(){return j&&"symbol"==typeof Symbol.toStringTag},I=Object.prototype.toString,O=I;var S=function(r){return O.call(r)},E=Object.prototype.hasOwnProperty;var F=function(r,n){return null!=r&&E.call(r,n)},H="function"==typeof Symbol?Symbol.toStringTag:"",T=F,G=H,P=I;var L=S,V=function(r){var n,t,e;if(null==r)return P.call(r);t=r[G],n=T(r,G);try{r[G]=void 0}catch(n){return P.call(r)}return e=P.call(r),n?r[G]=t:delete r[G],e},W=g()?V:L,x=W,M="function"==typeof Uint32Array;var k="function"==typeof Uint32Array?Uint32Array:null,Y=function(r){return M&&r instanceof Uint32Array||"[object Uint32Array]"===x(r)},C=k;var q=function(){var r,n;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,4294967296,4294967297]),r=Y(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var z="function"==typeof Uint32Array?Uint32Array:void 0,B=function(){throw new Error("not implemented")},D=q()?z:B,J=W,K="function"==typeof Float64Array;var Q="function"==typeof Float64Array?Float64Array:null,R=function(r){return K&&r instanceof Float64Array||"[object Float64Array]"===J(r)},X=Q;var Z=function(){var r,n;if("function"!=typeof X)return!1;try{n=new X([1,3.14,-3.14,NaN]),r=R(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var $="function"==typeof Float64Array?Float64Array:void 0,rr=function(){throw new Error("not implemented")},nr=Z()?$:rr,tr=W,er="function"==typeof Uint8Array;var or="function"==typeof Uint8Array?Uint8Array:null,ar=function(r){return er&&r instanceof Uint8Array||"[object Uint8Array]"===tr(r)},ur=or;var ir=function(){var r,n;if("function"!=typeof ur)return!1;try{n=new ur(n=[1,3.14,-3.14,256,257]),r=ar(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var fr="function"==typeof Uint8Array?Uint8Array:void 0,cr=function(){throw new Error("not implemented")},lr=ir()?fr:cr,yr=W,vr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null,br=function(r){return vr&&r instanceof Uint16Array||"[object Uint16Array]"===yr(r)},wr=pr;var Ar=function(){var r,n;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,65536,65537]),r=br(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var _r,mr="function"==typeof Uint16Array?Uint16Array:void 0,dr=function(){throw new Error("not implemented")},Ur={uint16:Ar()?mr:dr,uint8:lr};(_r=new Ur.uint16(1))[0]=4660;var hr,sr,Nr=52===new Ur.uint8(_r.buffer)[0];!0===Nr?(hr=1,sr=0):(hr=0,sr=1);var jr=D,gr={HIGH:hr,LOW:sr},Ir=new nr(1),Or=new jr(Ir.buffer),Sr=gr.HIGH,Er=gr.LOW;var Fr=function(r,n){return Ir[0]=n,r[0]=Or[Sr],r[1]=Or[Er],r};var Hr=function(r,n){return 1===arguments.length?Fr([0,0],r):Fr(r,n)},Tr=D,Gr=!0===Nr?1:0,Pr=new nr(1),Lr=new Tr(Pr.buffer);var Vr,Wr,xr=function(r){return Pr[0]=r,Lr[Gr]};!0===Nr?(Vr=1,Wr=0):(Vr=0,Wr=1);var Mr=D,kr={HIGH:Vr,LOW:Wr},Yr=new nr(1),Cr=new Mr(Yr.buffer),qr=kr.HIGH,zr=kr.LOW;var Br=function(r,n){return Cr[qr]=r,Cr[zr]=n,Yr[0]},Dr=Hr,Jr=xr,Kr=Br,Qr=[0,0];var Rr=N,Xr=p,Zr=function(r){return Math.abs(r)};var $r=function(r,n){return Xr(n)||Rr(n)?(r[0]=n,r[1]=0,r):0!==n&&Zr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var rn=xr;var nn=function(r){var n=rn(r);return(n=(2146435072&n)>>>20)-1023|0},tn=U,en=d,on=p,an=N,un=function(r,n){var t,e;return Dr(Qr,r),t=Qr[0],t&=2147483647,e=Jr(n),Kr(t|=e&=2147483648,Qr[1])},fn=function(r,n){return 1===arguments.length?$r([0,0],r):$r(r,n)},cn=nn,ln=Hr,yn=Br,vn=[0,0],pn=[0,0];var bn=function(r,n){var t,e;return 0===n||0===r||on(r)||an(r)?r:(fn(vn,r),n+=vn[1],(n+=cn(r=vn[0]))<-1074?un(0,r):n>1023?r<0?en:tn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ln(pn,r),t=pn[0],t&=2148532223,e*yn(t|=n+1023<<20,pn[1])))};var wn=bn,An=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var _n=p,mn=m,dn=d,Un=U,hn=function(r,n,t){var e,o,a;return a=(e=r-n)-(o=e*e)*An(o),wn(1-(n-e*a/(2-a)-r),t)};var sn=function(r){var n;return _n(r)||r===Un?r:r===dn?0:r>709.782712893384?Un:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=mn(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),hn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Nn=D,jn=!0===Nr?1:0,gn=new nr(1),In=new Nn(gn.buffer);var On=function(r,n){return gn[0]=r,In[jn]=n>>>0,gn[0]};var Sn=xr,En=On,Fn=p,Hn=d,Tn=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Gn=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Pn=.6931471803691238,Ln=1.9082149292705877e-10;var Vn=function(r){var n,t,e,o,a,u,i,f,c,l,y;return 0===r?Hn:Fn(r)||r<0?NaN:(o=0,(t=Sn(r))<1048576&&(o-=54,t=Sn(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(i=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=En(r,t|1072693248^i))-1,(1048575&2+t)<3?0===u?0===o?0:o*Pn+o*Ln:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Pn-(a-o*Ln-u)):(i=t-398458|0,f=440401-t|0,e=(l=(y=(c=u/(2+u))*c)*y)*Tn(l),a=y*Gn(l)+e,(i|=f)>0?(n=.5*u*u,0===o?u-(n-c*(n+a)):o*Pn-(n-(c*(n+a)+o*Ln)-u)):0===o?u-c*(u-a):o*Pn-(c*(u-a)-o*Ln-u))))},Wn=p,xn=sn,Mn=Vn,kn=d;var Yn=function(r){return function(){return r}},Cn=p,qn=sn,zn=Vn,Bn=d;var Dn=function(r,n,t){var e;return Wn(r)||Wn(n)||Wn(t)||t<=0?NaN:r===kn?0:-(e=(r-n)/t)-xn(-e)-Mn(t)},Jn=function(r,n){var t;return Cn(r)||Cn(n)||n<=0?Yn(NaN):(t=zn(n),function(e){var o;if(Cn(e))return NaN;if(e===Bn)return 0;return-(o=(e-r)/n)-qn(-o)-t})};v(Dn,"factory",Jn);var Kn=Dn;export{Kn as default,Jn as factory};
//# sourceMappingURL=mod.js.map
