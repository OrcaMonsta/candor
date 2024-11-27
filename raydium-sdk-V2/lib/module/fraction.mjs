var fn=Object.defineProperty,mn=Object.defineProperties;var dn=Object.getOwnPropertyDescriptors;var qe=Object.getOwnPropertySymbols;var pn=Object.prototype.hasOwnProperty,gn=Object.prototype.propertyIsEnumerable;var Ae=(e,n,r)=>n in e?fn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,De=(e,n)=>{for(var r in n||(n={}))pn.call(n,r)&&Ae(e,r,n[r]);if(qe)for(var r of qe(n))gn.call(n,r)&&Ae(e,r,n[r]);return e},Ee=(e,n)=>mn(e,dn(n));import be from"big.js";import Sr from"bn.js";import Dr from"decimal.js-light";import M from"bn.js";var V=9e15,G=1e9,ye="0123456789abcdef",ae="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",le="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",ve={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-V,maxE:V,crypto:!1},Ie,K,w=!0,me="[DecimalError] ",H=me+"Invalid argument: ",Ke=me+"Precision limit exceeded",je=me+"crypto unavailable",Ze="[object Decimal]",L=Math.floor,B=Math.pow,hn=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,wn=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,bn=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,He=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,U=1e7,h=7,Nn=9007199254740991,kn=ae.length-1,Be=le.length-1,d={toStringTag:Ze};d.absoluteValue=d.abs=function(){var e=new this.constructor(this);return e.s<0&&(e.s=1),p(e)};d.ceil=function(){return p(new this.constructor(this),this.e+1,2)};d.clampedTo=d.clamp=function(e,n){var r,t=this,i=t.constructor;if(e=new i(e),n=new i(n),!e.s||!n.s)return new i(NaN);if(e.gt(n))throw Error(H+n);return r=t.cmp(e),r<0?e:t.cmp(n)>0?n:new i(t)};d.comparedTo=d.cmp=function(e){var n,r,t,i,o=this,s=o.d,u=(e=new o.constructor(e)).d,a=o.s,c=e.s;if(!s||!u)return!a||!c?NaN:a!==c?a:s===u?0:!s^a<0?1:-1;if(!s[0]||!u[0])return s[0]?a:u[0]?-c:0;if(a!==c)return a;if(o.e!==e.e)return o.e>e.e^a<0?1:-1;for(t=s.length,i=u.length,n=0,r=t<i?t:i;n<r;++n)if(s[n]!==u[n])return s[n]>u[n]^a<0?1:-1;return t===i?0:t>i^a<0?1:-1};d.cosine=d.cos=function(){var e,n,r=this,t=r.constructor;return r.d?r.d[0]?(e=t.precision,n=t.rounding,t.precision=e+Math.max(r.e,r.sd())+h,t.rounding=1,r=Sn(t,Ve(t,r)),t.precision=e,t.rounding=n,p(K==2||K==3?r.neg():r,e,n,!0)):new t(1):new t(NaN)};d.cubeRoot=d.cbrt=function(){var e,n,r,t,i,o,s,u,a,c,l=this,f=l.constructor;if(!l.isFinite()||l.isZero())return new f(l);for(w=!1,o=l.s*B(l.s*l,1/3),!o||Math.abs(o)==1/0?(r=T(l.d),e=l.e,(o=(e-r.length+1)%3)&&(r+=o==1||o==-2?"0":"00"),o=B(r,1/3),e=L((e+1)/3)-(e%3==(e<0?-1:2)),o==1/0?r="5e"+e:(r=o.toExponential(),r=r.slice(0,r.indexOf("e")+1)+e),t=new f(r),t.s=l.s):t=new f(o.toString()),s=(e=f.precision)+3;;)if(u=t,a=u.times(u).times(u),c=a.plus(l),t=S(c.plus(l).times(u),c.plus(a),s+2,1),T(u.d).slice(0,s)===(r=T(t.d)).slice(0,s))if(r=r.slice(s-3,s+1),r=="9999"||!i&&r=="4999"){if(!i&&(p(u,e+1,0),u.times(u).times(u).eq(l))){t=u;break}s+=4,i=1}else{(!+r||!+r.slice(1)&&r.charAt(0)=="5")&&(p(t,e+1,1),n=!t.times(t).times(t).eq(l));break}return w=!0,p(t,e,f.rounding,n)};d.decimalPlaces=d.dp=function(){var e,n=this.d,r=NaN;if(n){if(e=n.length-1,r=(e-L(this.e/h))*h,e=n[e],e)for(;e%10==0;e/=10)r--;r<0&&(r=0)}return r};d.dividedBy=d.div=function(e){return S(this,new this.constructor(e))};d.dividedToIntegerBy=d.divToInt=function(e){var n=this,r=n.constructor;return p(S(n,new r(e),0,1,1),r.precision,r.rounding)};d.equals=d.eq=function(e){return this.cmp(e)===0};d.floor=function(){return p(new this.constructor(this),this.e+1,3)};d.greaterThan=d.gt=function(e){return this.cmp(e)>0};d.greaterThanOrEqualTo=d.gte=function(e){var n=this.cmp(e);return n==1||n===0};d.hyperbolicCosine=d.cosh=function(){var e,n,r,t,i,o=this,s=o.constructor,u=new s(1);if(!o.isFinite())return new s(o.s?1/0:NaN);if(o.isZero())return u;r=s.precision,t=s.rounding,s.precision=r+Math.max(o.e,o.sd())+4,s.rounding=1,i=o.d.length,i<32?(e=Math.ceil(i/3),n=(1/pe(4,e)).toString()):(e=16,n="2.3283064365386962890625e-10"),o=J(s,1,o.times(n),new s(1),!0);for(var a,c=e,l=new s(8);c--;)a=o.times(o),o=u.minus(a.times(l.minus(a.times(l))));return p(o,s.precision=r,s.rounding=t,!0)};d.hyperbolicSine=d.sinh=function(){var e,n,r,t,i=this,o=i.constructor;if(!i.isFinite()||i.isZero())return new o(i);if(n=o.precision,r=o.rounding,o.precision=n+Math.max(i.e,i.sd())+4,o.rounding=1,t=i.d.length,t<3)i=J(o,2,i,i,!0);else{e=1.4*Math.sqrt(t),e=e>16?16:e|0,i=i.times(1/pe(5,e)),i=J(o,2,i,i,!0);for(var s,u=new o(5),a=new o(16),c=new o(20);e--;)s=i.times(i),i=i.times(u.plus(s.times(a.times(s).plus(c))))}return o.precision=n,o.rounding=r,p(i,n,r,!0)};d.hyperbolicTangent=d.tanh=function(){var e,n,r=this,t=r.constructor;return r.isFinite()?r.isZero()?new t(r):(e=t.precision,n=t.rounding,t.precision=e+7,t.rounding=1,S(r.sinh(),r.cosh(),t.precision=e,t.rounding=n)):new t(r.s)};d.inverseCosine=d.acos=function(){var e,n=this,r=n.constructor,t=n.abs().cmp(1),i=r.precision,o=r.rounding;return t!==-1?t===0?n.isNeg()?C(r,i,o):new r(0):new r(NaN):n.isZero()?C(r,i+4,o).times(.5):(r.precision=i+6,r.rounding=1,n=n.asin(),e=C(r,i+4,o).times(.5),r.precision=i,r.rounding=o,e.minus(n))};d.inverseHyperbolicCosine=d.acosh=function(){var e,n,r=this,t=r.constructor;return r.lte(1)?new t(r.eq(1)?0:NaN):r.isFinite()?(e=t.precision,n=t.rounding,t.precision=e+Math.max(Math.abs(r.e),r.sd())+4,t.rounding=1,w=!1,r=r.times(r).minus(1).sqrt().plus(r),w=!0,t.precision=e,t.rounding=n,r.ln()):new t(r)};d.inverseHyperbolicSine=d.asinh=function(){var e,n,r=this,t=r.constructor;return!r.isFinite()||r.isZero()?new t(r):(e=t.precision,n=t.rounding,t.precision=e+2*Math.max(Math.abs(r.e),r.sd())+6,t.rounding=1,w=!1,r=r.times(r).plus(1).sqrt().plus(r),w=!0,t.precision=e,t.rounding=n,r.ln())};d.inverseHyperbolicTangent=d.atanh=function(){var e,n,r,t,i=this,o=i.constructor;return i.isFinite()?i.e>=0?new o(i.abs().eq(1)?i.s/0:i.isZero()?i:NaN):(e=o.precision,n=o.rounding,t=i.sd(),Math.max(t,e)<2*-i.e-1?p(new o(i),e,n,!0):(o.precision=r=t-i.e,i=S(i.plus(1),new o(1).minus(i),r+e,1),o.precision=e+4,o.rounding=1,i=i.ln(),o.precision=e,o.rounding=n,i.times(.5))):new o(NaN)};d.inverseSine=d.asin=function(){var e,n,r,t,i=this,o=i.constructor;return i.isZero()?new o(i):(n=i.abs().cmp(1),r=o.precision,t=o.rounding,n!==-1?n===0?(e=C(o,r+4,t).times(.5),e.s=i.s,e):new o(NaN):(o.precision=r+6,o.rounding=1,i=i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(),o.precision=r,o.rounding=t,i.times(2)))};d.inverseTangent=d.atan=function(){var e,n,r,t,i,o,s,u,a,c=this,l=c.constructor,f=l.precision,m=l.rounding;if(c.isFinite()){if(c.isZero())return new l(c);if(c.abs().eq(1)&&f+4<=Be)return s=C(l,f+4,m).times(.25),s.s=c.s,s}else{if(!c.s)return new l(NaN);if(f+4<=Be)return s=C(l,f+4,m).times(.5),s.s=c.s,s}for(l.precision=u=f+10,l.rounding=1,r=Math.min(28,u/h+2|0),e=r;e;--e)c=c.div(c.times(c).plus(1).sqrt().plus(1));for(w=!1,n=Math.ceil(u/h),t=1,a=c.times(c),s=new l(c),i=c;e!==-1;)if(i=i.times(a),o=s.minus(i.div(t+=2)),i=i.times(a),s=o.plus(i.div(t+=2)),s.d[n]!==void 0)for(e=n;s.d[e]===o.d[e]&&e--;);return r&&(s=s.times(2<<r-1)),w=!0,p(s,l.precision=f,l.rounding=m,!0)};d.isFinite=function(){return!!this.d};d.isInteger=d.isInt=function(){return!!this.d&&L(this.e/h)>this.d.length-2};d.isNaN=function(){return!this.s};d.isNegative=d.isNeg=function(){return this.s<0};d.isPositive=d.isPos=function(){return this.s>0};d.isZero=function(){return!!this.d&&this.d[0]===0};d.lessThan=d.lt=function(e){return this.cmp(e)<0};d.lessThanOrEqualTo=d.lte=function(e){return this.cmp(e)<1};d.logarithm=d.log=function(e){var n,r,t,i,o,s,u,a,c=this,l=c.constructor,f=l.precision,m=l.rounding,g=5;if(e==null)e=new l(10),n=!0;else{if(e=new l(e),r=e.d,e.s<0||!r||!r[0]||e.eq(1))return new l(NaN);n=e.eq(10)}if(r=c.d,c.s<0||!r||!r[0]||c.eq(1))return new l(r&&!r[0]?-1/0:c.s!=1?NaN:r?0:1/0);if(n)if(r.length>1)o=!0;else{for(i=r[0];i%10===0;)i/=10;o=i!==1}if(w=!1,u=f+g,s=Z(c,u),t=n?fe(l,u+10):Z(e,u),a=S(s,t,u,1),ee(a.d,i=f,m))do if(u+=10,s=Z(c,u),t=n?fe(l,u+10):Z(e,u),a=S(s,t,u,1),!o){+T(a.d).slice(i+1,i+15)+1==1e14&&(a=p(a,f+1,0));break}while(ee(a.d,i+=10,m));return w=!0,p(a,f,m)};d.minus=d.sub=function(e){var n,r,t,i,o,s,u,a,c,l,f,m,g=this,N=g.constructor;if(e=new N(e),!g.d||!e.d)return!g.s||!e.s?e=new N(NaN):g.d?e.s=-e.s:e=new N(e.d||g.s!==e.s?g:NaN),e;if(g.s!=e.s)return e.s=-e.s,g.plus(e);if(c=g.d,m=e.d,u=N.precision,a=N.rounding,!c[0]||!m[0]){if(m[0])e.s=-e.s;else if(c[0])e=new N(g);else return new N(a===3?-0:0);return w?p(e,u,a):e}if(r=L(e.e/h),l=L(g.e/h),c=c.slice(),o=l-r,o){for(f=o<0,f?(n=c,o=-o,s=m.length):(n=m,r=l,s=c.length),t=Math.max(Math.ceil(u/h),s)+2,o>t&&(o=t,n.length=1),n.reverse(),t=o;t--;)n.push(0);n.reverse()}else{for(t=c.length,s=m.length,f=t<s,f&&(s=t),t=0;t<s;t++)if(c[t]!=m[t]){f=c[t]<m[t];break}o=0}for(f&&(n=c,c=m,m=n,e.s=-e.s),s=c.length,t=m.length-s;t>0;--t)c[s++]=0;for(t=m.length;t>o;){if(c[--t]<m[t]){for(i=t;i&&c[--i]===0;)c[i]=U-1;--c[i],c[t]+=U}c[t]-=m[t]}for(;c[--s]===0;)c.pop();for(;c[0]===0;c.shift())--r;return c[0]?(e.d=c,e.e=de(c,r),w?p(e,u,a):e):new N(a===3?-0:0)};d.modulo=d.mod=function(e){var n,r=this,t=r.constructor;return e=new t(e),!r.d||!e.s||e.d&&!e.d[0]?new t(NaN):!e.d||r.d&&!r.d[0]?p(new t(r),t.precision,t.rounding):(w=!1,t.modulo==9?(n=S(r,e.abs(),0,3,1),n.s*=e.s):n=S(r,e,0,t.modulo,1),n=n.times(e),w=!0,r.minus(n))};d.naturalExponential=d.exp=function(){return Te(this)};d.naturalLogarithm=d.ln=function(){return Z(this)};d.negated=d.neg=function(){var e=new this.constructor(this);return e.s=-e.s,p(e)};d.plus=d.add=function(e){var n,r,t,i,o,s,u,a,c,l,f=this,m=f.constructor;if(e=new m(e),!f.d||!e.d)return!f.s||!e.s?e=new m(NaN):f.d||(e=new m(e.d||f.s===e.s?f:NaN)),e;if(f.s!=e.s)return e.s=-e.s,f.minus(e);if(c=f.d,l=e.d,u=m.precision,a=m.rounding,!c[0]||!l[0])return l[0]||(e=new m(f)),w?p(e,u,a):e;if(o=L(f.e/h),t=L(e.e/h),c=c.slice(),i=o-t,i){for(i<0?(r=c,i=-i,s=l.length):(r=l,t=o,s=c.length),o=Math.ceil(u/h),s=o>s?o+1:s+1,i>s&&(i=s,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for(s=c.length,i=l.length,s-i<0&&(i=s,r=l,l=c,c=r),n=0;i;)n=(c[--i]=c[i]+l[i]+n)/U|0,c[i]%=U;for(n&&(c.unshift(n),++t),s=c.length;c[--s]==0;)c.pop();return e.d=c,e.e=de(c,t),w?p(e,u,a):e};d.precision=d.sd=function(e){var n,r=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(H+e);return r.d?(n=Ge(r.d),e&&r.e+1>n&&(n=r.e+1)):n=NaN,n};d.round=function(){var e=this,n=e.constructor;return p(new n(e),e.e+1,n.rounding)};d.sine=d.sin=function(){var e,n,r=this,t=r.constructor;return r.isFinite()?r.isZero()?new t(r):(e=t.precision,n=t.rounding,t.precision=e+Math.max(r.e,r.sd())+h,t.rounding=1,r=En(t,Ve(t,r)),t.precision=e,t.rounding=n,p(K>2?r.neg():r,e,n,!0)):new t(NaN)};d.squareRoot=d.sqrt=function(){var e,n,r,t,i,o,s=this,u=s.d,a=s.e,c=s.s,l=s.constructor;if(c!==1||!u||!u[0])return new l(!c||c<0&&(!u||u[0])?NaN:u?s:1/0);for(w=!1,c=Math.sqrt(+s),c==0||c==1/0?(n=T(u),(n.length+a)%2==0&&(n+="0"),c=Math.sqrt(n),a=L((a+1)/2)-(a<0||a%2),c==1/0?n="5e"+a:(n=c.toExponential(),n=n.slice(0,n.indexOf("e")+1)+a),t=new l(n)):t=new l(c.toString()),r=(a=l.precision)+3;;)if(o=t,t=o.plus(S(s,o,r+2,1)).times(.5),T(o.d).slice(0,r)===(n=T(t.d)).slice(0,r))if(n=n.slice(r-3,r+1),n=="9999"||!i&&n=="4999"){if(!i&&(p(o,a+1,0),o.times(o).eq(s))){t=o;break}r+=4,i=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(p(t,a+1,1),e=!t.times(t).eq(s));break}return w=!0,p(t,a,l.rounding,e)};d.tangent=d.tan=function(){var e,n,r=this,t=r.constructor;return r.isFinite()?r.isZero()?new t(r):(e=t.precision,n=t.rounding,t.precision=e+10,t.rounding=1,r=r.sin(),r.s=1,r=S(r,new t(1).minus(r.times(r)).sqrt(),e+10,0),t.precision=e,t.rounding=n,p(K==2||K==4?r.neg():r,e,n,!0)):new t(NaN)};d.times=d.mul=function(e){var n,r,t,i,o,s,u,a,c,l=this,f=l.constructor,m=l.d,g=(e=new f(e)).d;if(e.s*=l.s,!m||!m[0]||!g||!g[0])return new f(!e.s||m&&!m[0]&&!g||g&&!g[0]&&!m?NaN:!m||!g?e.s/0:e.s*0);for(r=L(l.e/h)+L(e.e/h),a=m.length,c=g.length,a<c&&(o=m,m=g,g=o,s=a,a=c,c=s),o=[],s=a+c,t=s;t--;)o.push(0);for(t=c;--t>=0;){for(n=0,i=a+t;i>t;)u=o[i]+g[t]*m[i-t-1]+n,o[i--]=u%U|0,n=u/U|0;o[i]=(o[i]+n)%U|0}for(;!o[--s];)o.pop();return n?++r:o.shift(),e.d=o,e.e=de(o,r),w?p(e,f.precision,f.rounding):e};d.toBinary=function(e,n){return Pe(this,2,e,n)};d.toDecimalPlaces=d.toDP=function(e,n){var r=this,t=r.constructor;return r=new t(r),e===void 0?r:(x(e,0,G),n===void 0?n=t.rounding:x(n,0,8),p(r,e+r.e+1,n))};d.toExponential=function(e,n){var r,t=this,i=t.constructor;return e===void 0?r=_(t,!0):(x(e,0,G),n===void 0?n=i.rounding:x(n,0,8),t=p(new i(t),e+1,n),r=_(t,!0,e+1)),t.isNeg()&&!t.isZero()?"-"+r:r};d.toFixed=function(e,n){var r,t,i=this,o=i.constructor;return e===void 0?r=_(i):(x(e,0,G),n===void 0?n=o.rounding:x(n,0,8),t=p(new o(i),e+i.e+1,n),r=_(t,!1,e+t.e+1)),i.isNeg()&&!i.isZero()?"-"+r:r};d.toFraction=function(e){var n,r,t,i,o,s,u,a,c,l,f,m,g=this,N=g.d,b=g.constructor;if(!N)return new b(g);if(c=r=new b(1),t=a=new b(0),n=new b(t),o=n.e=Ge(N)-g.e-1,s=o%h,n.d[0]=B(10,s<0?h+s:s),e==null)e=o>0?n:c;else{if(u=new b(e),!u.isInt()||u.lt(c))throw Error(H+u);e=u.gt(n)?o>0?n:c:u}for(w=!1,u=new b(T(N)),l=b.precision,b.precision=o=N.length*h*2;f=S(u,n,0,1,1),i=r.plus(f.times(t)),i.cmp(e)!=1;)r=t,t=i,i=c,c=a.plus(f.times(i)),a=i,i=n,n=u.minus(f.times(i)),u=i;return i=S(e.minus(r),t,0,1,1),a=a.plus(i.times(c)),r=r.plus(i.times(t)),a.s=c.s=g.s,m=S(c,t,o,1).minus(g).abs().cmp(S(a,r,o,1).minus(g).abs())<1?[c,t]:[a,r],b.precision=l,w=!0,m};d.toHexadecimal=d.toHex=function(e,n){return Pe(this,16,e,n)};d.toNearest=function(e,n){var r=this,t=r.constructor;if(r=new t(r),e==null){if(!r.d)return r;e=new t(1),n=t.rounding}else{if(e=new t(e),n===void 0?n=t.rounding:x(n,0,8),!r.d)return e.s?r:e;if(!e.d)return e.s&&(e.s=r.s),e}return e.d[0]?(w=!1,r=S(r,e,0,n,1).times(e),w=!0,p(r)):(e.s=r.s,r=e),r};d.toNumber=function(){return+this};d.toOctal=function(e,n){return Pe(this,8,e,n)};d.toPower=d.pow=function(e){var n,r,t,i,o,s,u=this,a=u.constructor,c=+(e=new a(e));if(!u.d||!e.d||!u.d[0]||!e.d[0])return new a(B(+u,c));if(u=new a(u),u.eq(1))return u;if(t=a.precision,o=a.rounding,e.eq(1))return p(u,t,o);if(n=L(e.e/h),n>=e.d.length-1&&(r=c<0?-c:c)<=Nn)return i=Xe(a,u,r,t),e.s<0?new a(1).div(i):p(i,t,o);if(s=u.s,s<0){if(n<e.d.length-1)return new a(NaN);if((e.d[n]&1)==0&&(s=1),u.e==0&&u.d[0]==1&&u.d.length==1)return u.s=s,u}return r=B(+u,c),n=r==0||!isFinite(r)?L(c*(Math.log("0."+T(u.d))/Math.LN10+u.e+1)):new a(r+"").e,n>a.maxE+1||n<a.minE-1?new a(n>0?s/0:0):(w=!1,a.rounding=u.s=1,r=Math.min(12,(n+"").length),i=Te(e.times(Z(u,t+r)),t),i.d&&(i=p(i,t+5,1),ee(i.d,t,o)&&(n=t+10,i=p(Te(e.times(Z(u,n+r)),n),n+5,1),+T(i.d).slice(t+1,t+15)+1==1e14&&(i=p(i,t+1,0)))),i.s=s,w=!0,a.rounding=o,p(i,t,o))};d.toPrecision=function(e,n){var r,t=this,i=t.constructor;return e===void 0?r=_(t,t.e<=i.toExpNeg||t.e>=i.toExpPos):(x(e,1,G),n===void 0?n=i.rounding:x(n,0,8),t=p(new i(t),e,n),r=_(t,e<=t.e||t.e<=i.toExpNeg,e)),t.isNeg()&&!t.isZero()?"-"+r:r};d.toSignificantDigits=d.toSD=function(e,n){var r=this,t=r.constructor;return e===void 0?(e=t.precision,n=t.rounding):(x(e,1,G),n===void 0?n=t.rounding:x(n,0,8)),p(new t(r),e,n)};d.toString=function(){var e=this,n=e.constructor,r=_(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()&&!e.isZero()?"-"+r:r};d.truncated=d.trunc=function(){return p(new this.constructor(this),this.e+1,1)};d.valueOf=d.toJSON=function(){var e=this,n=e.constructor,r=_(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()?"-"+r:r};function T(e){var n,r,t,i=e.length-1,o="",s=e[0];if(i>0){for(o+=s,n=1;n<i;n++)t=e[n]+"",r=h-t.length,r&&(o+=j(r)),o+=t;s=e[n],t=s+"",r=h-t.length,r&&(o+=j(r))}else if(s===0)return"0";for(;s%10===0;)s/=10;return o+s}function x(e,n,r){if(e!==~~e||e<n||e>r)throw Error(H+e)}function ee(e,n,r,t){var i,o,s,u;for(o=e[0];o>=10;o/=10)--n;return--n<0?(n+=h,i=0):(i=Math.ceil((n+1)/h),n%=h),o=B(10,h-n),u=e[i]%o|0,t==null?n<3?(n==0?u=u/100|0:n==1&&(u=u/10|0),s=r<4&&u==99999||r>3&&u==49999||u==5e4||u==0):s=(r<4&&u+1==o||r>3&&u+1==o/2)&&(e[i+1]/o/100|0)==B(10,n-2)-1||(u==o/2||u==0)&&(e[i+1]/o/100|0)==0:n<4?(n==0?u=u/1e3|0:n==1?u=u/100|0:n==2&&(u=u/10|0),s=(t||r<4)&&u==9999||!t&&r>3&&u==4999):s=((t||r<4)&&u+1==o||!t&&r>3&&u+1==o/2)&&(e[i+1]/o/1e3|0)==B(10,n-3)-1,s}function ce(e,n,r){for(var t,i=[0],o,s=0,u=e.length;s<u;){for(o=i.length;o--;)i[o]*=n;for(i[0]+=ye.indexOf(e.charAt(s++)),t=0;t<i.length;t++)i[t]>r-1&&(i[t+1]===void 0&&(i[t+1]=0),i[t+1]+=i[t]/r|0,i[t]%=r)}return i.reverse()}function Sn(e,n){var r,t,i;if(n.isZero())return n;t=n.d.length,t<32?(r=Math.ceil(t/3),i=(1/pe(4,r)).toString()):(r=16,i="2.3283064365386962890625e-10"),e.precision+=r,n=J(e,1,n.times(i),new e(1));for(var o=r;o--;){var s=n.times(n);n=s.times(s).minus(s).times(8).plus(1)}return e.precision-=r,n}var S=function(){function e(t,i,o){var s,u=0,a=t.length;for(t=t.slice();a--;)s=t[a]*i+u,t[a]=s%o|0,u=s/o|0;return u&&t.unshift(u),t}function n(t,i,o,s){var u,a;if(o!=s)a=o>s?1:-1;else for(u=a=0;u<o;u++)if(t[u]!=i[u]){a=t[u]>i[u]?1:-1;break}return a}function r(t,i,o,s){for(var u=0;o--;)t[o]-=u,u=t[o]<i[o]?1:0,t[o]=u*s+t[o]-i[o];for(;!t[0]&&t.length>1;)t.shift()}return function(t,i,o,s,u,a){var c,l,f,m,g,N,b,O,v,q,k,W,ie,I,Ne,oe,Q,ke,A,se,ue=t.constructor,Se=t.s==i.s?1:-1,P=t.d,D=i.d;if(!P||!P[0]||!D||!D[0])return new ue(!t.s||!i.s||(P?D&&P[0]==D[0]:!D)?NaN:P&&P[0]==0||!D?Se*0:Se/0);for(a?(g=1,l=t.e-i.e):(a=U,g=h,l=L(t.e/g)-L(i.e/g)),A=D.length,Q=P.length,v=new ue(Se),q=v.d=[],f=0;D[f]==(P[f]||0);f++);if(D[f]>(P[f]||0)&&l--,o==null?(I=o=ue.precision,s=ue.rounding):u?I=o+(t.e-i.e)+1:I=o,I<0)q.push(1),N=!0;else{if(I=I/g+2|0,f=0,A==1){for(m=0,D=D[0],I++;(f<Q||m)&&I--;f++)Ne=m*a+(P[f]||0),q[f]=Ne/D|0,m=Ne%D|0;N=m||f<Q}else{for(m=a/(D[0]+1)|0,m>1&&(D=e(D,m,a),P=e(P,m,a),A=D.length,Q=P.length),oe=A,k=P.slice(0,A),W=k.length;W<A;)k[W++]=0;se=D.slice(),se.unshift(0),ke=D[0],D[1]>=a/2&&++ke;do m=0,c=n(D,k,A,W),c<0?(ie=k[0],A!=W&&(ie=ie*a+(k[1]||0)),m=ie/ke|0,m>1?(m>=a&&(m=a-1),b=e(D,m,a),O=b.length,W=k.length,c=n(b,k,O,W),c==1&&(m--,r(b,A<O?se:D,O,a))):(m==0&&(c=m=1),b=D.slice()),O=b.length,O<W&&b.unshift(0),r(k,b,W,a),c==-1&&(W=k.length,c=n(D,k,A,W),c<1&&(m++,r(k,A<W?se:D,W,a))),W=k.length):c===0&&(m++,k=[0]),q[f++]=m,c&&k[0]?k[W++]=P[oe]||0:(k=[P[oe]],W=1);while((oe++<Q||k[0]!==void 0)&&I--);N=k[0]!==void 0}q[0]||q.shift()}if(g==1)v.e=l,Ie=N;else{for(f=1,m=q[0];m>=10;m/=10)f++;v.e=f+l*g-1,p(v,u?o+v.e+1:o,s,N)}return v}}();function p(e,n,r,t){var i,o,s,u,a,c,l,f,m,g=e.constructor;e:if(n!=null){if(f=e.d,!f)return e;for(i=1,u=f[0];u>=10;u/=10)i++;if(o=n-i,o<0)o+=h,s=n,l=f[m=0],a=l/B(10,i-s-1)%10|0;else if(m=Math.ceil((o+1)/h),u=f.length,m>=u)if(t){for(;u++<=m;)f.push(0);l=a=0,i=1,o%=h,s=o-h+1}else break e;else{for(l=u=f[m],i=1;u>=10;u/=10)i++;o%=h,s=o-h+i,a=s<0?0:l/B(10,i-s-1)%10|0}if(t=t||n<0||f[m+1]!==void 0||(s<0?l:l%B(10,i-s-1)),c=r<4?(a||t)&&(r==0||r==(e.s<0?3:2)):a>5||a==5&&(r==4||t||r==6&&(o>0?s>0?l/B(10,i-s):0:f[m-1])%10&1||r==(e.s<0?8:7)),n<1||!f[0])return f.length=0,c?(n-=e.e+1,f[0]=B(10,(h-n%h)%h),e.e=-n||0):f[0]=e.e=0,e;if(o==0?(f.length=m,u=1,m--):(f.length=m+1,u=B(10,h-o),f[m]=s>0?(l/B(10,i-s)%B(10,s)|0)*u:0),c)for(;;)if(m==0){for(o=1,s=f[0];s>=10;s/=10)o++;for(s=f[0]+=u,u=1;s>=10;s/=10)u++;o!=u&&(e.e++,f[0]==U&&(f[0]=1));break}else{if(f[m]+=u,f[m]!=U)break;f[m--]=0,u=1}for(o=f.length;f[--o]===0;)f.pop()}return w&&(e.e>g.maxE?(e.d=null,e.e=NaN):e.e<g.minE&&(e.e=0,e.d=[0])),e}function _(e,n,r){if(!e.isFinite())return $e(e);var t,i=e.e,o=T(e.d),s=o.length;return n?(r&&(t=r-s)>0?o=o.charAt(0)+"."+o.slice(1)+j(t):s>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(e.e<0?"e":"e+")+e.e):i<0?(o="0."+j(-i-1)+o,r&&(t=r-s)>0&&(o+=j(t))):i>=s?(o+=j(i+1-s),r&&(t=r-i-1)>0&&(o=o+"."+j(t))):((t=i+1)<s&&(o=o.slice(0,t)+"."+o.slice(t)),r&&(t=r-s)>0&&(i+1===s&&(o+="."),o+=j(t))),o}function de(e,n){var r=e[0];for(n*=h;r>=10;r/=10)n++;return n}function fe(e,n,r){if(n>kn)throw w=!0,r&&(e.precision=r),Error(Ke);return p(new e(ae),n,1,!0)}function C(e,n,r){if(n>Be)throw Error(Ke);return p(new e(le),n,r,!0)}function Ge(e){var n=e.length-1,r=n*h+1;if(n=e[n],n){for(;n%10==0;n/=10)r--;for(n=e[0];n>=10;n/=10)r++}return r}function j(e){for(var n="";e--;)n+="0";return n}function Xe(e,n,r,t){var i,o=new e(1),s=Math.ceil(t/h+4);for(w=!1;;){if(r%2&&(o=o.times(n),Ue(o.d,s)&&(i=!0)),r=L(r/2),r===0){r=o.d.length-1,i&&o.d[r]===0&&++o.d[r];break}n=n.times(n),Ue(n.d,s)}return w=!0,o}function Ce(e){return e.d[e.d.length-1]&1}function Ye(e,n,r){for(var t,i=new e(n[0]),o=0;++o<n.length;)if(t=new e(n[o]),t.s)i[r](t)&&(i=t);else{i=t;break}return i}function Te(e,n){var r,t,i,o,s,u,a,c=0,l=0,f=0,m=e.constructor,g=m.rounding,N=m.precision;if(!e.d||!e.d[0]||e.e>17)return new m(e.d?e.d[0]?e.s<0?0:1/0:1:e.s?e.s<0?0:e:0/0);for(n==null?(w=!1,a=N):a=n,u=new m(.03125);e.e>-2;)e=e.times(u),f+=5;for(t=Math.log(B(2,f))/Math.LN10*2+5|0,a+=t,r=o=s=new m(1),m.precision=a;;){if(o=p(o.times(e),a,1),r=r.times(++l),u=s.plus(S(o,r,a,1)),T(u.d).slice(0,a)===T(s.d).slice(0,a)){for(i=f;i--;)s=p(s.times(s),a,1);if(n==null)if(c<3&&ee(s.d,a-t,g,c))m.precision=a+=10,r=o=u=new m(1),l=0,c++;else return p(s,m.precision=N,g,w=!0);else return m.precision=N,s}s=u}}function Z(e,n){var r,t,i,o,s,u,a,c,l,f,m,g=1,N=10,b=e,O=b.d,v=b.constructor,q=v.rounding,k=v.precision;if(b.s<0||!O||!O[0]||!b.e&&O[0]==1&&O.length==1)return new v(O&&!O[0]?-1/0:b.s!=1?NaN:O?0:b);if(n==null?(w=!1,l=k):l=n,v.precision=l+=N,r=T(O),t=r.charAt(0),Math.abs(o=b.e)<15e14){for(;t<7&&t!=1||t==1&&r.charAt(1)>3;)b=b.times(e),r=T(b.d),t=r.charAt(0),g++;o=b.e,t>1?(b=new v("0."+r),o++):b=new v(t+"."+r.slice(1))}else return c=fe(v,l+2,k).times(o+""),b=Z(new v(t+"."+r.slice(1)),l-N).plus(c),v.precision=k,n==null?p(b,k,q,w=!0):b;for(f=b,a=s=b=S(b.minus(1),b.plus(1),l,1),m=p(b.times(b),l,1),i=3;;){if(s=p(s.times(m),l,1),c=a.plus(S(s,new v(i),l,1)),T(c.d).slice(0,l)===T(a.d).slice(0,l))if(a=a.times(2),o!==0&&(a=a.plus(fe(v,l+2,k).times(o+""))),a=S(a,new v(g),l,1),n==null)if(ee(a.d,l-N,q,u))v.precision=l+=N,c=s=b=S(f.minus(1),f.plus(1),l,1),m=p(b.times(b),l,1),i=u=1;else return p(a,v.precision=k,q,w=!0);else return v.precision=k,a;a=c,i+=2}}function $e(e){return String(e.s*e.s/0)}function We(e,n){var r,t,i;for((r=n.indexOf("."))>-1&&(n=n.replace(".","")),(t=n.search(/e/i))>0?(r<0&&(r=t),r+=+n.slice(t+1),n=n.substring(0,t)):r<0&&(r=n.length),t=0;n.charCodeAt(t)===48;t++);for(i=n.length;n.charCodeAt(i-1)===48;--i);if(n=n.slice(t,i),n){if(i-=t,e.e=r=r-t-1,e.d=[],t=(r+1)%h,r<0&&(t+=h),t<i){for(t&&e.d.push(+n.slice(0,t)),i-=h;t<i;)e.d.push(+n.slice(t,t+=h));n=n.slice(t),t=h-n.length}else t-=i;for(;t--;)n+="0";e.d.push(+n),w&&(e.e>e.constructor.maxE?(e.d=null,e.e=NaN):e.e<e.constructor.minE&&(e.e=0,e.d=[0]))}else e.e=0,e.d=[0];return e}function Dn(e,n){var r,t,i,o,s,u,a,c,l;if(n.indexOf("_")>-1){if(n=n.replace(/(\d)_(?=\d)/g,"$1"),He.test(n))return We(e,n)}else if(n==="Infinity"||n==="NaN")return+n||(e.s=NaN),e.e=NaN,e.d=null,e;if(wn.test(n))r=16,n=n.toLowerCase();else if(hn.test(n))r=2;else if(bn.test(n))r=8;else throw Error(H+n);for(o=n.search(/p/i),o>0?(a=+n.slice(o+1),n=n.substring(2,o)):n=n.slice(2),o=n.indexOf("."),s=o>=0,t=e.constructor,s&&(n=n.replace(".",""),u=n.length,o=u-o,i=Xe(t,new t(r),o,o*2)),c=ce(n,r,U),l=c.length-1,o=l;c[o]===0;--o)c.pop();return o<0?new t(e.s*0):(e.e=de(c,l),e.d=c,w=!1,s&&(e=S(e,i,u*4)),a&&(e=e.times(Math.abs(a)<54?B(2,a):ge.pow(2,a))),w=!0,e)}function En(e,n){var r,t=n.d.length;if(t<3)return n.isZero()?n:J(e,2,n,n);r=1.4*Math.sqrt(t),r=r>16?16:r|0,n=n.times(1/pe(5,r)),n=J(e,2,n,n);for(var i,o=new e(5),s=new e(16),u=new e(20);r--;)i=n.times(n),n=n.times(o.plus(i.times(s.times(i).minus(u))));return n}function J(e,n,r,t,i){var o,s,u,a,c=1,l=e.precision,f=Math.ceil(l/h);for(w=!1,a=r.times(r),u=new e(t);;){if(s=S(u.times(a),new e(n++*n++),l,1),u=i?t.plus(s):t.minus(s),t=S(s.times(a),new e(n++*n++),l,1),s=u.plus(t),s.d[f]!==void 0){for(o=f;s.d[o]===u.d[o]&&o--;);if(o==-1)break}o=u,u=t,t=s,s=o,c++}return w=!0,s.d.length=f+1,s}function pe(e,n){for(var r=e;--n;)r*=e;return r}function Ve(e,n){var r,t=n.s<0,i=C(e,e.precision,1),o=i.times(.5);if(n=n.abs(),n.lte(o))return K=t?4:1,n;if(r=n.divToInt(i),r.isZero())K=t?3:2;else{if(n=n.minus(r.times(i)),n.lte(o))return K=Ce(r)?t?2:3:t?4:1,n;K=Ce(r)?t?1:4:t?3:2}return n.minus(i).abs()}function Pe(e,n,r,t){var i,o,s,u,a,c,l,f,m,g=e.constructor,N=r!==void 0;if(N?(x(r,1,G),t===void 0?t=g.rounding:x(t,0,8)):(r=g.precision,t=g.rounding),!e.isFinite())l=$e(e);else{for(l=_(e),s=l.indexOf("."),N?(i=2,n==16?r=r*4-3:n==8&&(r=r*3-2)):i=n,s>=0&&(l=l.replace(".",""),m=new g(1),m.e=l.length-s,m.d=ce(_(m),10,i),m.e=m.d.length),f=ce(l,10,i),o=a=f.length;f[--a]==0;)f.pop();if(!f[0])l=N?"0p+0":"0";else{if(s<0?o--:(e=new g(e),e.d=f,e.e=o,e=S(e,m,r,t,0,i),f=e.d,o=e.e,c=Ie),s=f[r],u=i/2,c=c||f[r+1]!==void 0,c=t<4?(s!==void 0||c)&&(t===0||t===(e.s<0?3:2)):s>u||s===u&&(t===4||c||t===6&&f[r-1]&1||t===(e.s<0?8:7)),f.length=r,c)for(;++f[--r]>i-1;)f[r]=0,r||(++o,f.unshift(1));for(a=f.length;!f[a-1];--a);for(s=0,l="";s<a;s++)l+=ye.charAt(f[s]);if(N){if(a>1)if(n==16||n==8){for(s=n==16?4:3,--a;a%s;a++)l+="0";for(f=ce(l,i,n),a=f.length;!f[a-1];--a);for(s=1,l="1.";s<a;s++)l+=ye.charAt(f[s])}else l=l.charAt(0)+"."+l.slice(1);l=l+(o<0?"p":"p+")+o}else if(o<0){for(;++o;)l="0"+l;l="0."+l}else if(++o>a)for(o-=a;o--;)l+="0";else o<a&&(l=l.slice(0,o)+"."+l.slice(o))}l=(n==16?"0x":n==2?"0b":n==8?"0o":"")+l}return e.s<0?"-"+l:l}function Ue(e,n){if(e.length>n)return e.length=n,!0}function yn(e){return new this(e).abs()}function vn(e){return new this(e).acos()}function Bn(e){return new this(e).acosh()}function Tn(e,n){return new this(e).plus(n)}function Wn(e){return new this(e).asin()}function Pn(e){return new this(e).asinh()}function Ln(e){return new this(e).atan()}function On(e){return new this(e).atanh()}function xn(e,n){e=new this(e),n=new this(n);var r,t=this.precision,i=this.rounding,o=t+4;return!e.s||!n.s?r=new this(NaN):!e.d&&!n.d?(r=C(this,o,1).times(n.s>0?.25:.75),r.s=e.s):!n.d||e.isZero()?(r=n.s<0?C(this,t,i):new this(0),r.s=e.s):!e.d||n.isZero()?(r=C(this,o,1).times(.5),r.s=e.s):n.s<0?(this.precision=o,this.rounding=1,r=this.atan(S(e,n,o,1)),n=C(this,o,1),this.precision=t,this.rounding=i,r=e.s<0?r.minus(n):r.plus(n)):r=this.atan(S(e,n,o,1)),r}function Fn(e){return new this(e).cbrt()}function Rn(e){return p(e=new this(e),e.e+1,2)}function Mn(e,n,r){return new this(e).clamp(n,r)}function qn(e){if(!e||typeof e!="object")throw Error(me+"Object expected");var n,r,t,i=e.defaults===!0,o=["precision",1,G,"rounding",0,8,"toExpNeg",-V,0,"toExpPos",0,V,"maxE",0,V,"minE",-V,0,"modulo",0,9];for(n=0;n<o.length;n+=3)if(r=o[n],i&&(this[r]=ve[r]),(t=e[r])!==void 0)if(L(t)===t&&t>=o[n+1]&&t<=o[n+2])this[r]=t;else throw Error(H+r+": "+t);if(r="crypto",i&&(this[r]=ve[r]),(t=e[r])!==void 0)if(t===!0||t===!1||t===0||t===1)if(t)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[r]=!0;else throw Error(je);else this[r]=!1;else throw Error(H+r+": "+t);return this}function An(e){return new this(e).cos()}function Cn(e){return new this(e).cosh()}function Je(e){var n,r,t;function i(o){var s,u,a,c=this;if(!(c instanceof i))return new i(o);if(c.constructor=i,_e(o)){c.s=o.s,w?!o.d||o.e>i.maxE?(c.e=NaN,c.d=null):o.e<i.minE?(c.e=0,c.d=[0]):(c.e=o.e,c.d=o.d.slice()):(c.e=o.e,c.d=o.d?o.d.slice():o.d);return}if(a=typeof o,a==="number"){if(o===0){c.s=1/o<0?-1:1,c.e=0,c.d=[0];return}if(o<0?(o=-o,c.s=-1):c.s=1,o===~~o&&o<1e7){for(s=0,u=o;u>=10;u/=10)s++;w?s>i.maxE?(c.e=NaN,c.d=null):s<i.minE?(c.e=0,c.d=[0]):(c.e=s,c.d=[o]):(c.e=s,c.d=[o]);return}else if(o*0!==0){o||(c.s=NaN),c.e=NaN,c.d=null;return}return We(c,o.toString())}else if(a!=="string")throw Error(H+o);return(u=o.charCodeAt(0))===45?(o=o.slice(1),c.s=-1):(u===43&&(o=o.slice(1)),c.s=1),He.test(o)?We(c,o):Dn(c,o)}if(i.prototype=d,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.EUCLID=9,i.config=i.set=qn,i.clone=Je,i.isDecimal=_e,i.abs=yn,i.acos=vn,i.acosh=Bn,i.add=Tn,i.asin=Wn,i.asinh=Pn,i.atan=Ln,i.atanh=On,i.atan2=xn,i.cbrt=Fn,i.ceil=Rn,i.clamp=Mn,i.cos=An,i.cosh=Cn,i.div=Un,i.exp=_n,i.floor=In,i.hypot=Kn,i.ln=jn,i.log=Zn,i.log10=Gn,i.log2=Hn,i.max=Xn,i.min=Yn,i.mod=$n,i.mul=Vn,i.pow=Jn,i.random=zn,i.round=Qn,i.sign=er,i.sin=nr,i.sinh=rr,i.sqrt=tr,i.sub=ir,i.sum=or,i.tan=sr,i.tanh=ur,i.trunc=cr,e===void 0&&(e={}),e&&e.defaults!==!0)for(t=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],n=0;n<t.length;)e.hasOwnProperty(r=t[n++])||(e[r]=this[r]);return i.config(e),i}function Un(e,n){return new this(e).div(n)}function _n(e){return new this(e).exp()}function In(e){return p(e=new this(e),e.e+1,3)}function Kn(){var e,n,r=new this(0);for(w=!1,e=0;e<arguments.length;)if(n=new this(arguments[e++]),n.d)r.d&&(r=r.plus(n.times(n)));else{if(n.s)return w=!0,new this(1/0);r=n}return w=!0,r.sqrt()}function _e(e){return e instanceof ge||e&&e.toStringTag===Ze||!1}function jn(e){return new this(e).ln()}function Zn(e,n){return new this(e).log(n)}function Hn(e){return new this(e).log(2)}function Gn(e){return new this(e).log(10)}function Xn(){return Ye(this,arguments,"lt")}function Yn(){return Ye(this,arguments,"gt")}function $n(e,n){return new this(e).mod(n)}function Vn(e,n){return new this(e).mul(n)}function Jn(e,n){return new this(e).pow(n)}function zn(e){var n,r,t,i,o=0,s=new this(1),u=[];if(e===void 0?e=this.precision:x(e,1,G),t=Math.ceil(e/h),this.crypto)if(crypto.getRandomValues)for(n=crypto.getRandomValues(new Uint32Array(t));o<t;)i=n[o],i>=429e7?n[o]=crypto.getRandomValues(new Uint32Array(1))[0]:u[o++]=i%1e7;else if(crypto.randomBytes){for(n=crypto.randomBytes(t*=4);o<t;)i=n[o]+(n[o+1]<<8)+(n[o+2]<<16)+((n[o+3]&127)<<24),i>=214e7?crypto.randomBytes(4).copy(n,o):(u.push(i%1e7),o+=4);o=t/4}else throw Error(je);else for(;o<t;)u[o++]=Math.random()*1e7|0;for(t=u[--o],e%=h,t&&e&&(i=B(10,h-e),u[o]=(t/i|0)*i);u[o]===0;o--)u.pop();if(o<0)r=0,u=[0];else{for(r=-1;u[0]===0;r-=h)u.shift();for(t=1,i=u[0];i>=10;i/=10)t++;t<h&&(r-=h-t)}return s.e=r,s.d=u,s}function Qn(e){return p(e=new this(e),e.e+1,this.rounding)}function er(e){return e=new this(e),e.d?e.d[0]?e.s:0*e.s:e.s||NaN}function nr(e){return new this(e).sin()}function rr(e){return new this(e).sinh()}function tr(e){return new this(e).sqrt()}function ir(e,n){return new this(e).sub(n)}function or(){var e=0,n=arguments,r=new this(n[e]);for(w=!1;r.s&&++e<n.length;)r=r.plus(n[e]);return w=!0,p(r,this.precision,this.rounding)}function sr(e){return new this(e).tan()}function ur(e){return new this(e).tanh()}function cr(e){return p(e=new this(e),e.e+1,1)}d[Symbol.for("nodejs.util.inspect.custom")]=d.toString;d[Symbol.toStringTag]="Decimal";var ge=d.constructor=Je(ve);ae=new ge(ae);le=new ge(le);import{PublicKey as Oe}from"@solana/web3.js";import{TOKEN_PROGRAM_ID as ar}from"@solana/spl-token";import{PublicKey as y,SystemProgram as Qe,SYSVAR_RENT_PUBKEY as lr}from"@solana/web3.js";function Le({pubkey:e,isSigner:n=!1,isWritable:r=!0}){return{pubkey:e,isWritable:r,isSigner:n}}var Lr=[Le({pubkey:ar,isWritable:!1}),Le({pubkey:Qe.programId,isWritable:!1}),Le({pubkey:lr,isWritable:!1})];function en({publicKey:e,transformSol:n}){let r=nn(e.toString());if(r instanceof y)return n&&r.equals(ne)?ze:r;if(n&&r.toString()===ne.toBase58())return ze;if(typeof r=="string"){if(r===y.default.toBase58())return y.default;try{return new y(r)}catch{throw new Error("invalid public key")}}throw new Error("invalid public key")}function nn(e){try{return new y(e)}catch{return e}}var Or=new y("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),xr=new y("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),Fr=new y("SysvarRent111111111111111111111111111111111"),Rr=new y("SysvarC1ock11111111111111111111111111111111"),Mr=new y("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),qr=new y("Sysvar1nstructions1111111111111111111111111"),Ar=Qe.programId,Cr=new y("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),Ur=new y("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS"),_r=new y("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"),Ir=new y("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),Kr=new y("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),jr=new y("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),Zr=new y("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"),Hr=new y("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX"),Gr=new y("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa"),Xr=new y("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo"),Yr=new y("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"),ze=new y("So11111111111111111111111111111111111111112"),ne=y.default;import{PublicKey as fr}from"@solana/web3.js";import{TOKEN_PROGRAM_ID as rn}from"@solana/spl-token";var tn={chainId:101,address:fr.default.toBase58(),programId:rn.toBase58(),decimals:9,symbol:"SOL",name:"solana",logoURI:"https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png",tags:[],priority:2,type:"raydium",extensions:{coingeckoId:"solana"}},$={chainId:101,address:"So11111111111111111111111111111111111111112",programId:rn.toBase58(),decimals:9,symbol:"WSOL",name:"Wrapped SOL",logoURI:"https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png",tags:[],priority:2,type:"raydium",extensions:{coingeckoId:"solana"}};var xe=class{constructor({mint:n,decimals:r,symbol:t,name:i,skipMint:o=!1,isToken2022:s=!1}){if(n===ne.toBase58()||n instanceof Oe&&ne.equals(n)){this.decimals=$.decimals,this.symbol=$.symbol,this.name=$.name,this.mint=new Oe($.address),this.isToken2022=!1;return}this.decimals=r,this.symbol=t||n.toString().substring(0,6),this.name=i||n.toString().substring(0,6),this.mint=o?Oe.default:en({publicKey:n}),this.isToken2022=s}equals(n){return this===n?!0:this.mint.equals(n.mint)}},z=xe;z.WSOL=new xe(Ee(De({},$),{mint:$.address}));import{get as on,set as mr}from"lodash";var Fe=class{constructor(n){this.logLevel=n.logLevel!==void 0?n.logLevel:0,this.name=n.name}set level(n){this.logLevel=n}get time(){return Date.now().toString()}get moduleName(){return this.name}isLogLevel(n){return n<=this.logLevel}error(...n){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...n),this):this}logWithError(...n){let r=n.map(t=>typeof t=="object"?JSON.stringify(t):t).join(", ");throw new Error(r)}warning(...n){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...n),this):this}info(...n){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...n),this):this}debug(...n){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...n),this):this}},sn={},dr={};function X(e){let n=on(sn,e);if(!n){let r=on(dr,e);n=new Fe({name:e,logLevel:r}),mr(sn,e,n)}return n}var ft=X("Raydium_price");var Re=class{constructor({decimals:n,symbol:r="UNKNOWN",name:t="UNKNOWN"}){this.decimals=n,this.symbol=r,this.name=t}equals(n){return this===n}},he=Re;he.SOL=new Re(tn);import hr from"big.js";import St from"bn.js";import pr from"toformat";var gr=pr,re=gr;var Pt=X("Raydium_amount"),Lt=re(hr);import Nr from"bn.js";var Rt=new E(new Nr(100));import{PublicKey as Vt}from"@solana/web3.js";import zt from"bn.js";var kr=new M(0),wi=new M(1),bi=new M(2),Ni=new M(3),ki=new M(5),br=new M(10),Si=new M(100),Di=new M(1e3),Ei=new M(1e4),ln=9007199254740991;function Y(e){let n=X("Raydium_parseBigNumberish");if(e instanceof M)return e;if(typeof e=="string"){if(e.match(/^-?[0-9]+$/))return new M(e);n.logWithError(`invalid BigNumberish string: ${e}`)}return typeof e=="number"?(e%1&&n.logWithError(`BigNumberish number underflow: ${e}`),(e>=ln||e<=-ln)&&n.logWithError(`BigNumberish number overflow: ${e}`),new M(String(e))):typeof e=="bigint"?new M(e.toString()):(n.error(`invalid BigNumberish value: ${e}`),new M(0))}var we=X("module/fraction"),Me=re(be),te=re(Dr),Er={[0]:te.ROUND_DOWN,[1]:te.ROUND_HALF_UP,[2]:te.ROUND_UP},yr={[0]:be.roundDown,[1]:be.roundHalfUp,[2]:be.roundUp},E=class{constructor(n,r=new Sr(1)){this.numerator=Y(n),this.denominator=Y(r)}get quotient(){return this.numerator.div(this.denominator)}invert(){return new E(this.denominator,this.numerator)}add(n){let r=n instanceof E?n:new E(Y(n));return this.denominator.eq(r.denominator)?new E(this.numerator.add(r.numerator),this.denominator):new E(this.numerator.mul(r.denominator).add(r.numerator.mul(this.denominator)),this.denominator.mul(r.denominator))}sub(n){let r=n instanceof E?n:new E(Y(n));return this.denominator.eq(r.denominator)?new E(this.numerator.sub(r.numerator),this.denominator):new E(this.numerator.mul(r.denominator).sub(r.numerator.mul(this.denominator)),this.denominator.mul(r.denominator))}mul(n){let r=n instanceof E?n:new E(Y(n));return new E(this.numerator.mul(r.numerator),this.denominator.mul(r.denominator))}div(n){let r=n instanceof E?n:new E(Y(n));return new E(this.numerator.mul(r.denominator),this.denominator.mul(r.numerator))}toSignificant(n,r={groupSeparator:""},t=1){Number.isInteger(n)||we.logWithError(`${n} is not an integer.`),n<=0&&we.logWithError(`${n} is not positive.`),te.set({precision:n+1,rounding:Er[t]});let i=new te(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(n);return i.toFormat(i.decimalPlaces(),r)}toFixed(n,r={groupSeparator:""},t=1){return Number.isInteger(n)||we.logWithError(`${n} is not an integer.`),n<0&&we.logWithError(`${n} is negative.`),Me.DP=n,Me.RM=yr[t]||1,new Me(this.numerator.toString()).div(this.denominator.toString()).toFormat(n,r)}isZero(){return this.numerator.isZero()}};export{E as Fraction};
//# sourceMappingURL=fraction.mjs.map