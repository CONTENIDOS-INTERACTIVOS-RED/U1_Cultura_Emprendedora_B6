(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["glosario~referencias","chunk-4e410830"],{"00b4":function(t,r,n){"use strict";n("ac1f");var e=n("23e7"),o=n("861d"),i=function(){var t=!1,r=/[ac]/;return r.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===r.test("abc")&&t}(),a=/./.test;e({target:"RegExp",proto:!0,forced:!i},{test:function(t){if("function"!==typeof this.exec)return a.call(this,t);var r=this.exec(t);if(null!==r&&!o(r))throw new Error("RegExp exec method returned something other than an Object or null");return!!r}})},"057f":function(t,r,n){var e=n("fc6a"),o=n("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(r){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(e(t))}},"0cb2":function(t,r,n){var e=n("7b0b"),o=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,r,n,u,f,s){var l=n+t.length,d=u.length,v=c;return void 0!==f&&(f=e(f),v=a),i.call(s,v,(function(e,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(l);case"<":a=f[i.slice(1,-1)];break;default:var c=+i;if(0===c)return e;if(c>d){var s=o(c/10);return 0===s?e:s<=d?void 0===u[s-1]?i.charAt(1):u[s-1]+i.charAt(1):e}a=u[c-1]}return void 0===a?"":a}))}},"1dde":function(t,r,n){var e=n("d039"),o=n("b622"),i=n("2d00"),a=o("species");t.exports=function(t){return i>=51||!e((function(){var r=[],n=r.constructor={};return n[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"25f0":function(t,r,n){"use strict";var e=n("6eeb"),o=n("825a"),i=n("d039"),a=n("ad6d"),c="toString",u=RegExp.prototype,f=u[c],s=i((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),l=f.name!=c;(s||l)&&e(RegExp.prototype,c,(function(){var t=o(this),r=String(t.source),n=t.flags,e=String(void 0===n&&t instanceof RegExp&&!("flags"in u)?a.call(t):n);return"/"+r+"/"+e}),{unsafe:!0})},2909:function(t,r,n){"use strict";function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function o(t){if(Array.isArray(t))return e(t)}n.d(r,"a",(function(){return u}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a"),n("25f0"),n("b0c0"),n("ac1f"),n("00b4");function a(t,r){if(t){if("string"===typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return o(t)||i(t)||a(t)||c()}},"3cd8":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"container-fluid banner-interno"},[n("div",{staticClass:"banner-interno__fondo"}),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-interno__titulo py-5"},[n("h3",{staticClass:"text-uppercase",domProps:{innerHTML:t._s("Unidad "+t.globalData.numeroUnidad+". "+t.globalData.tituloUnidad)}}),n("h2",{staticClass:"mb-0 text-uppercase",domProps:{innerHTML:t._s(t.subTitulo)}})])])])},o=[],i={name:"BannerInterno",props:{titulo:{type:String,default:""},subTitulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},a=i,c=(n("8385"),n("2877")),u=Object(c["a"])(a,e,o,!1,null,null,null);r["default"]=u.exports},"4df4":function(t,r,n){"use strict";var e=n("0366"),o=n("7b0b"),i=n("9bdd"),a=n("e95a"),c=n("50c4"),u=n("8418"),f=n("35a1");t.exports=function(t){var r,n,s,l,d,v,p=o(t),b="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,y=void 0!==g,m=f(p),S=0;if(y&&(g=e(g,h>2?arguments[2]:void 0,2)),void 0==m||b==Array&&a(m))for(r=c(p.length),n=new b(r);r>S;S++)v=y?g(p[S],S):p[S],u(n,S,v);else for(l=m.call(p),d=l.next,n=new b;!(s=d.call(l)).done;S++)v=y?i(l,g,[s.value,S],!0):s.value,u(n,S,v);return n.length=S,n}},"4e82":function(t,r,n){"use strict";var e=n("23e7"),o=n("1c0b"),i=n("7b0b"),a=n("d039"),c=n("a640"),u=[],f=u.sort,s=a((function(){u.sort(void 0)})),l=a((function(){u.sort(null)})),d=c("sort"),v=s||!l||!d;e({target:"Array",proto:!0,forced:v},{sort:function(t){return void 0===t?f.call(i(this)):f.call(i(this),o(t))}})},5319:function(t,r,n){"use strict";var e=n("d784"),o=n("825a"),i=n("50c4"),a=n("a691"),c=n("1d80"),u=n("8aa5"),f=n("0cb2"),s=n("14c3"),l=Math.max,d=Math.min,v=function(t){return void 0===t?t:String(t)};e("replace",2,(function(t,r,n,e){var p=e.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=e.REPLACE_KEEPS_$0,h=p?"$":"$0";return[function(n,e){var o=c(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,o,e):r.call(String(o),n,e)},function(t,e){if(!p&&b||"string"===typeof e&&-1===e.indexOf(h)){var c=n(r,t,this,e);if(c.done)return c.value}var g=o(t),y=String(this),m="function"===typeof e;m||(e=String(e));var S=g.global;if(S){var w=g.unicode;g.lastIndex=0}var x=[];while(1){var A=s(g,y);if(null===A)break;if(x.push(A),!S)break;var O=String(A[0]);""===O&&(g.lastIndex=u(y,i(g.lastIndex),w))}for(var E="",j=0,P=0;P<x.length;P++){A=x[P];for(var $=String(A[0]),_=l(d(a(A.index),y.length),0),I=[],C=1;C<A.length;C++)I.push(v(A[C]));var R=A.groups;if(m){var T=[$].concat(I,_,y);void 0!==R&&T.push(R);var k=String(e.apply(void 0,T))}else k=f($,y,_,I,R,e);_>=j&&(E+=y.slice(j,_)+k,j=_+$.length)}return E+y.slice(j)}]}))},"65f0":function(t,r,n){var e=n("861d"),o=n("e8b5"),i=n("b622"),a=i("species");t.exports=function(t,r){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?e(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},"746f":function(t,r,n){var e=n("428f"),o=n("5135"),i=n("e538"),a=n("9bf2").f;t.exports=function(t){var r=e.Symbol||(e.Symbol={});o(r,t)||a(r,t,{value:i.f(t)})}},"7db0":function(t,r,n){"use strict";var e=n("23e7"),o=n("b727").find,i=n("44d2"),a="find",c=!0;a in[]&&Array(1)[a]((function(){c=!1})),e({target:"Array",proto:!0,forced:c},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},8385:function(t,r,n){"use strict";n("d36b")},8418:function(t,r,n){"use strict";var e=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,r,n){var a=e(r);a in t?o.f(t,a,i(0,n)):t[a]=n}},"9bdd":function(t,r,n){var e=n("825a"),o=n("2a62");t.exports=function(t,r,n,i){try{return i?r(e(n)[0],n[1]):r(n)}catch(a){throw o(t),a}}},a15b:function(t,r,n){"use strict";var e=n("23e7"),o=n("44ad"),i=n("fc6a"),a=n("a640"),c=[].join,u=o!=Object,f=a("join",",");e({target:"Array",proto:!0,forced:u||!f},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},a4d3:function(t,r,n){"use strict";var e=n("23e7"),o=n("da84"),i=n("d066"),a=n("c430"),c=n("83ab"),u=n("4930"),f=n("fdbf"),s=n("d039"),l=n("5135"),d=n("e8b5"),v=n("861d"),p=n("825a"),b=n("7b0b"),h=n("fc6a"),g=n("c04e"),y=n("5c6c"),m=n("7c73"),S=n("df75"),w=n("241c"),x=n("057f"),A=n("7418"),O=n("06cf"),E=n("9bf2"),j=n("d1e7"),P=n("9112"),$=n("6eeb"),_=n("5692"),I=n("f772"),C=n("d012"),R=n("90e3"),T=n("b622"),k=n("e538"),D=n("746f"),U=n("d44e"),M=n("69f3"),N=n("b727").forEach,L=I("hidden"),J="Symbol",B="prototype",F=T("toPrimitive"),H=M.set,q=M.getterFor(J),G=Object[B],K=o.Symbol,Q=i("JSON","stringify"),W=O.f,X=E.f,z=x.f,V=j.f,Y=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),rt=_("symbol-to-string-registry"),nt=_("wks"),et=o.QObject,ot=!et||!et[B]||!et[B].findChild,it=c&&s((function(){return 7!=m(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,r,n){var e=W(G,r);e&&delete G[r],X(t,r,n),e&&t!==G&&X(G,r,e)}:X,at=function(t,r){var n=Y[t]=m(K[B]);return H(n,{type:J,tag:t,description:r}),c||(n.description=r),n},ct=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},ut=function(t,r,n){t===G&&ut(Z,r,n),p(t);var e=g(r,!0);return p(n),l(Y,e)?(n.enumerable?(l(t,L)&&t[L][e]&&(t[L][e]=!1),n=m(n,{enumerable:y(0,!1)})):(l(t,L)||X(t,L,y(1,{})),t[L][e]=!0),it(t,e,n)):X(t,e,n)},ft=function(t,r){p(t);var n=h(r),e=S(n).concat(pt(n));return N(e,(function(r){c&&!lt.call(n,r)||ut(t,r,n[r])})),t},st=function(t,r){return void 0===r?m(t):ft(m(t),r)},lt=function(t){var r=g(t,!0),n=V.call(this,r);return!(this===G&&l(Y,r)&&!l(Z,r))&&(!(n||!l(this,r)||!l(Y,r)||l(this,L)&&this[L][r])||n)},dt=function(t,r){var n=h(t),e=g(r,!0);if(n!==G||!l(Y,e)||l(Z,e)){var o=W(n,e);return!o||!l(Y,e)||l(n,L)&&n[L][e]||(o.enumerable=!0),o}},vt=function(t){var r=z(h(t)),n=[];return N(r,(function(t){l(Y,t)||l(C,t)||n.push(t)})),n},pt=function(t){var r=t===G,n=z(r?Z:h(t)),e=[];return N(n,(function(t){!l(Y,t)||r&&!l(G,t)||e.push(Y[t])})),e};if(u||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=R(t),n=function(t){this===G&&n.call(Z,t),l(this,L)&&l(this[L],r)&&(this[L][r]=!1),it(this,r,y(1,t))};return c&&ot&&it(G,r,{configurable:!0,set:n}),at(r,t)},$(K[B],"toString",(function(){return q(this).tag})),$(K,"withoutSetter",(function(t){return at(R(t),t)})),j.f=lt,E.f=ut,O.f=dt,w.f=x.f=vt,A.f=pt,k.f=function(t){return at(T(t),t)},c&&(X(K[B],"description",{configurable:!0,get:function(){return q(this).description}}),a||$(G,"propertyIsEnumerable",lt,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:K}),N(S(nt),(function(t){D(t)})),e({target:J,stat:!0,forced:!u},{for:function(t){var r=String(t);if(l(tt,r))return tt[r];var n=K(r);return tt[r]=n,rt[n]=r,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(rt,t))return rt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),e({target:"Object",stat:!0,forced:!u,sham:!c},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:dt}),e({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:vt,getOwnPropertySymbols:pt}),e({target:"Object",stat:!0,forced:s((function(){A.f(1)}))},{getOwnPropertySymbols:function(t){return A.f(b(t))}}),Q){var bt=!u||s((function(){var t=K();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));e({target:"JSON",stat:!0,forced:bt},{stringify:function(t,r,n){var e,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(e=r,(v(r)||void 0!==t)&&!ct(t))return d(r)||(r=function(t,r){if("function"==typeof e&&(r=e.call(this,t,r)),!ct(r))return r}),o[1]=r,Q.apply(null,o)}})}K[B][F]||P(K[B],F,K[B].valueOf),U(K,J),C[L]=!0},a630:function(t,r,n){var e=n("23e7"),o=n("4df4"),i=n("1c7e"),a=!i((function(t){Array.from(t)}));e({target:"Array",stat:!0,forced:a},{from:o})},a640:function(t,r,n){"use strict";var e=n("d039");t.exports=function(t,r){var n=[][t];return!!n&&e((function(){n.call(null,r||function(){throw 1},1)}))}},b727:function(t,r,n){var e=n("0366"),o=n("44ad"),i=n("7b0b"),a=n("50c4"),c=n("65f0"),u=[].push,f=function(t){var r=1==t,n=2==t,f=3==t,s=4==t,l=6==t,d=7==t,v=5==t||l;return function(p,b,h,g){for(var y,m,S=i(p),w=o(S),x=e(b,h,3),A=a(w.length),O=0,E=g||c,j=r?E(p,A):n||d?E(p,0):void 0;A>O;O++)if((v||O in w)&&(y=w[O],m=x(y,O,S),t))if(r)j[O]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return O;case 2:u.call(j,y)}else switch(t){case 4:return!1;case 7:u.call(j,y)}return l?-1:f||s?s:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},d28b:function(t,r,n){var e=n("746f");e("iterator")},d36b:function(t,r,n){},d81d:function(t,r,n){"use strict";var e=n("23e7"),o=n("b727").map,i=n("1dde"),a=i("map");e({target:"Array",proto:!0,forced:!a},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,r,n){"use strict";var e=n("23e7"),o=n("83ab"),i=n("da84"),a=n("5135"),c=n("861d"),u=n("9bf2").f,f=n("e893"),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof d?new s(t):void 0===t?s():s(t);return""===t&&(l[r]=!0),r};f(d,s);var v=d.prototype=s.prototype;v.constructor=d;var p=v.toString,b="Symbol(test)"==String(s("test")),h=/^Symbol\((.*)\)[^)]+$/;u(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,r=p.call(t);if(a(l,t))return"";var n=b?r.slice(7,-1):r.replace(h,"$1");return""===n?void 0:n}}),e({global:!0,forced:!0},{Symbol:d})}},e538:function(t,r,n){var e=n("b622");r.f=e},e8b5:function(t,r,n){var e=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},fb6a:function(t,r,n){"use strict";var e=n("23e7"),o=n("861d"),i=n("e8b5"),a=n("23cb"),c=n("50c4"),u=n("fc6a"),f=n("8418"),s=n("b622"),l=n("1dde"),d=l("slice"),v=s("species"),p=[].slice,b=Math.max;e({target:"Array",proto:!0,forced:!d},{slice:function(t,r){var n,e,s,l=u(this),d=c(l.length),h=a(t,d),g=a(void 0===r?d:r,d);if(i(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(l,h,g);for(e=new(void 0===n?Array:n)(b(g-h,0)),s=0;h<g;h++,s++)h in l&&f(e,s,l[h]);return e.length=s,e}})},ff6a:function(t,r,n){"use strict";n("7db0"),n("d3b7"),n("ac1f"),n("5319"),n("25f0"),n("a15b"),n("d81d");r["a"]={computed:{menuData:function(){return this.$config.menuPrincipal.menu},iniciarLnk:function(){var t=this.menuData.find((function(t){return"introduccion"===t.nombreRuta})),r=this.menuData.find((function(t){return"tema1"===t.nombreRuta}));return t||r}},methods:{quitarAcentos:function(t){var r=t.replace(/<\/?[^>]+(>|$)/g,""),n={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return r.split("").map((function(t){return n[t]||t})).join("").toString()}}}}}]);
//# sourceMappingURL=glosario~referencias.63dddbaf.js.map