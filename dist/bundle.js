!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Collapse=t():e.Collapse=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=8)}([function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t){function n(e,t,n){var r,o,i,a,s;function c(){var l=Date.now()-a;l<t&&l>=0?r=setTimeout(c,t-l):(r=null,n||(s=e.apply(i,o),i=o=null))}null==t&&(t=100);var l=function(){i=this,o=arguments,a=Date.now();var l=n&&!r;return r||(r=setTimeout(c,t)),l&&(s=e.apply(i,o),i=o=null),s};return l.clear=function(){r&&(clearTimeout(r),r=null)},l.flush=function(){r&&(s=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},l}n.debounce=n,e.exports=n},function(e,t,n){(function(r){t.log=function(...e){return"object"==typeof console&&console.log&&console.log(...e)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&"%c"===e&&(o=++r)}),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e},t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=n(4)(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,n(3))},function(e,t,n){(function(e){!function(n,r){"use strict";var o={};n.PubSub=o;var i=n.define;!function(e){var t={},n=-1;function r(e){var t;for(t in e)if(e.hasOwnProperty(t))return!0;return!1}function o(e,t,n){try{e(t,n)}catch(e){setTimeout(function(e){return function(){throw e}}(e),0)}}function i(e,t,n){e(t,n)}function a(e,n,r,a){var s,c=t[n],l=a?i:o;if(t.hasOwnProperty(n))for(s in c)c.hasOwnProperty(s)&&l(c[s],e,r)}function s(e,n,o,i){var s=function(e,t,n){return function(){var r=String(e),o=r.lastIndexOf(".");for(a(e,e,t,n);-1!==o;)o=(r=r.substr(0,o)).lastIndexOf("."),a(e,r,t,n)}}(e="symbol"==typeof e?e.toString():e,n,i);return!!function(e){for(var n=String(e),o=Boolean(t.hasOwnProperty(n)&&r(t[n])),i=n.lastIndexOf(".");!o&&-1!==i;)i=(n=n.substr(0,i)).lastIndexOf("."),o=Boolean(t.hasOwnProperty(n)&&r(t[n]));return o}(e)&&(!0===o?s():setTimeout(s,0),!0)}e.publish=function(t,n){return s(t,n,!1,e.immediateExceptions)},e.publishSync=function(t,n){return s(t,n,!0,e.immediateExceptions)},e.subscribe=function(e,r){if("function"!=typeof r)return!1;e="symbol"==typeof e?e.toString():e,t.hasOwnProperty(e)||(t[e]={});var o="uid_"+String(++n);return t[e][o]=r,o},e.subscribeOnce=function(t,n){var r=e.subscribe(t,(function(){e.unsubscribe(r),n.apply(this,arguments)}));return e},e.clearAllSubscriptions=function(){t={}},e.clearSubscriptions=function(e){var n;for(n in t)t.hasOwnProperty(n)&&0===n.indexOf(e)&&delete t[n]},e.countSubscriptions=function(e){var n,r=0;for(n in t)t.hasOwnProperty(n)&&0===n.indexOf(e)&&r++;return r},e.getSubscriptions=function(e){var n,r=[];for(n in t)t.hasOwnProperty(n)&&0===n.indexOf(e)&&r.push(n);return r},e.unsubscribe=function(n){var r,o,i,a="string"==typeof n&&(t.hasOwnProperty(n)||function(e){var n;for(n in t)if(t.hasOwnProperty(n)&&0===n.indexOf(e))return!0;return!1}(n)),s=!a&&"string"==typeof n,c="function"==typeof n,l=!1;if(!a){for(r in t)if(t.hasOwnProperty(r)){if(o=t[r],s&&o[n]){delete o[n],l=n;break}if(c)for(i in o)o.hasOwnProperty(i)&&o[i]===n&&(delete o[i],l=!0)}return l}e.clearSubscriptions(n)}}(o),"function"==typeof i&&i.amd?i((function(){return o})):(void 0!==e&&e.exports&&(t=e.exports=o),t.PubSub=o,e.exports=t=o)}("object"==typeof window&&window||this)}).call(this,n(6)(e))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,l=[],u=!1,d=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&p())}function p(){if(!u){var e=s(f);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||u||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){e.exports=function(e){function t(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]}function r(e){let n;function a(...e){if(!a.enabled)return;const t=a,o=Number(new Date),i=o-(n||o);t.diff=i,t.prev=n,t.curr=o,n=o,e[0]=r.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let s=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(n,o)=>{if("%%"===n)return n;s++;const i=r.formatters[o];if("function"==typeof i){const r=e[s];n=i.call(t,r),e.splice(s,1),s--}return n}),r.formatArgs.call(t,e),(t.log||r.log).apply(t,e)}return a.namespace=e,a.enabled=r.enabled(e),a.useColors=r.useColors(),a.color=t(e),a.destroy=o,a.extend=i,"function"==typeof r.init&&r.init(a),r.instances.push(a),a}function o(){const e=r.instances.indexOf(this);return-1!==e&&(r.instances.splice(e,1),!0)}function i(e,t){const n=r(this.namespace+(void 0===t?":":t)+e);return n.log=this.log,n}function a(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(e){return e instanceof Error?e.stack||e.message:e},r.disable=function(){const e=[...r.names.map(a),...r.skips.map(a).map(e=>"-"+e)].join(",");return r.enable(""),e},r.enable=function(e){let t;r.save(e),r.names=[],r.skips=[];const n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(t=0;t<o;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")));for(t=0;t<r.instances.length;t++){const e=r.instances[t];e.enabled=r.enabled(e.namespace)}},r.enabled=function(e){if("*"===e[e.length-1])return!0;let t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1},r.humanize=n(5),Object.keys(e).forEach(t=>{r[t]=e[t]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=t,r.enable(r.load()),r}},function(e,t){var n=1e3,r=6e4,o=60*r,i=24*o;function a(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,t){t=t||{};var s=typeof e;if("string"===s&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(t){var a=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*a;case"weeks":case"week":case"w":return 6048e5*a;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*o;case"minutes":case"minute":case"mins":case"min":case"m":return a*r;case"seconds":case"second":case"secs":case"sec":case"s":return a*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}(e);if("number"===s&&!1===isNaN(e))return t.long?function(e){var t=Math.abs(e);return t>=i?a(e,t,i,"day"):t>=o?a(e,t,o,"hour"):t>=r?a(e,t,r,"minute"):t>=n?a(e,t,n,"second"):e+" ms"}(e):function(e){var t=Math.abs(e);return t>=i?Math.round(e/i)+"d":t>=o?Math.round(e/o)+"h":t>=r?Math.round(e/r)+"m":t>=n?Math.round(e/n)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r);const i="object"==typeof document&&null!==document,a="object"==typeof window&&null!==window&&window.self===window;if(()=>i&&a){let t;try{"undefined"!=typeof window&&(t=window.localStorage.debug)}catch(e){console.error("groupher could not enable debug.")}o.a.enable(t)}var s=(e,t="@editor/")=>o()(`${t}${e}`);const c={focusHolder:"focus-holder",mention:"cdx-mention",emoji:"cdx-emoji",editorInlineToolbarWrapper:"ce-inline-toolbar__toggler-and-button-wrapper",mentionContainer:"cdx-mention__container",emojiContainer:"cdx-emoji__container"},l={mention:"label",strike:"strike",lock:"addr",emoji:"i"},u="classList"in document.documentElement,d=e=>new RegExp("(^|\\s+)"+e+"(\\s+|$)"),f=(e,t)=>u?e.classList.contains(t):d(t).test(e.className),p=(e,t)=>{0!==t.trim().length&&(u?e.classList.add(t):f(e,t)||(e.className=e.className+" "+t))},m=(e,t)=>{0!==t.trim().length&&(u?e.classList.remove(t):e.className=e.className.replace(d(t)," "))};var h={has:f,add:p,remove:m,toggle:(e,t,n)=>{if(0===t.trim().length)return;let r;(r=void 0!==n?n?p:m:f(e,t)?m:p)(e,t)}};const b=s("utils/dom"),g=e=>e instanceof Element,y=(e,t=null,n={})=>{let r=document.createElement(e);Array.isArray(t)?r.classList.add(...t.filter(e=>!!e)):t&&r.classList.add(t);for(let e in n)"placeholder"===e?r.setAttribute("placeholder",n[e]):0===e.indexOf("data-")?r.setAttribute(e,n[e]):"for"===e?r.setAttribute("for",n[e]):r[e]=n[e];return r},v=(e,t=[])=>new Promise((n,r)=>{const o=document.createElement("script");o.setAttribute("src",e),o.addEventListener("load",()=>{n(t.map(e=>{const t=window[e];return void 0===t&&console.warn(`No external named '${e}' in window`),t}))}),o.addEventListener("error",r),document.body.appendChild(o)}),C=(e,t)=>{if(e.parentNode){const n=e.parentNode.querySelectorAll("."+t.styles.settingsButton);Array.from(n).forEach(e=>e.classList.remove(t.styles.settingsButtonActive))}e.classList.add(t.styles.settingsButtonActive)},w=e=>{if(e.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)}else if(void 0!==document.body.createTextRange){var r=document.body.createTextRange();r.moveToElementText(e),r.collapse(!1),r.select()}},x=e=>{let t,n;if(window.getSelection&&(t=window.getSelection()).getRangeAt&&t.rangeCount){(n=t.getRangeAt(0)).deleteContents();const a=document.createElement("div");a.innerHTML=e;for(var r,o,i=document.createDocumentFragment();r=a.firstChild;)o=i.appendChild(r);n.insertNode(i),o&&((n=n.cloneRange()).setStartAfter(o),n.collapse(!0),t.removeAllRanges(),t.addRange(n))}},S=function(e){if(document.body.createTextRange){const t=document.body.createTextRange();t.moveToElementText(e),t.select()}else if(window.getSelection){const t=window.getSelection(),n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}else console.warn("Could not select text in node: Unsupported browser.")},k=(e,t)=>{const n=document.querySelector("."+e);n&&(n.style.display=t)},O=(e,t)=>{const n=document.querySelector("."+e);n&&n.remove()},E=(e,t=c.editorInlineToolbarWrapper)=>{k(t,"none"),"mention"===e?(b("keepCustomInlineToolOnly for mention"),k(c.mentionContainer,"block"),k(c.emojiContainer,"none")):"emoji"===e&&(b("keepCustomInlineToolOnly for emoji"),k(c.emojiContainer,"block"),k(c.mentionContainer,"none"))},j=(e=c.editorInlineToolbarWrapper)=>{b("restoreDefaultInlineTools: ",e),k(e,"flex"),k(c.mentionContainer,"none"),k(c.emojiContainer,"none")},T=(e,t,n="@")=>{""===t.value.trim()&&(e.replaceWith(""),x(n))},F=(e,t,n="@")=>{t&&(e.replaceWith(""),x(n))},L=(e,t,n)=>{e.replaceWith(t),n&&(n.tooltip.hide(),n.toolbar.close())},_=(e,t,n="block")=>{if(t[e].style.display!==n&&e>=0){for(let e=0;e<t.length;e+=1)t[e].style.display="none";setTimeout(()=>{t[e].style.display=n})}},A=e=>{for(let t=0;t<e.length;t+=1)e[t].style.display="none"},R="cdx-mention",P="cdx-emoji",D="inline_tmp_anchor",I=s("utils:markdown"),M="HEADER_1",N="HEADER_2",B="HEADER_3",z="UNORDERED_LIST",$="ORDERED_LIST",H="QUOTE",U="CODE",V={BOLD:new RegExp(/\*\*([\S]{1,})\*\*/),ITALIC:new RegExp(/__([\S]{1,})__/),MARKER:new RegExp(/==([\S]{1,})==/),INLINE_CODE:new RegExp(/\`([\S]{1,})\`/)},W=function(e){return{md:e[0],content:e[1],isValid:!0}},q=e=>{switch(e){case M:return{type:"header",toolData:{level:1},config:{}};case N:return{type:"header",toolData:{level:2},config:{}};case B:return{type:"header",toolData:{level:3},config:{}};case z:return{type:"list",toolData:{style:"unordered"},config:{}};case $:return{type:"list",toolData:{style:"ordered"},config:{}};case H:return{type:"quote",toolData:{},config:{}};case U:return{type:"code",toolData:{},config:{}};default:return{isInvalid:!1,type:"",toolData:"",config:""}}},J=s("utils/emoji"),G=s("utils/emoji");s("utils:linkCard");const K=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");var Z=n(0),X=n.n(Z);const Y=function(e,t,n){let r=document.createElement("script");r.src=e,r.onload=t,r.onreadystatechange=t,n.appendChild(r)},Q=function(e,t,n){let r=document.createElement("link");r.rel="stylesheet",r.src=e,r.onload=t,r.onreadystatechange=t,n.appendChild(r)},ee=e=>{for(var t in e)return!1;return!0},te=(e,t)=>{const{length:n}=e;let r=-1;for(;++r<n;)if(t(e[r],r,e))return r;return-1},ne=(e,t,n)=>{const r=e.splice(t,1)[0];e.splice(n,0,r)},re=(e,t,n)=>{const r=e[t];e[t]=e[n],e[n]=r},oe=e=>"string"==typeof e||e instanceof String,ie=e=>{let t=0;for(let n=0,r=e.length;n<r;n++)t+=e.charCodeAt(n)<256?1:2;return t},ae=(e,t=20)=>oe(e)?t>=ie(e)?e:e.slice(0,t)+"...":"??...",se=e=>{const t=/^[a-zA-Z0-9,.:;!#$%&(){}=/<>\[\]`@+\|\*\?\s\-_ ’'‘ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ]$/;for(let n=0,r=e.length;n<r;n++)if(!t.test(e[n]))return!1;return!0},ce=s("utils:enhancer"),le=(e,t,n)=>{n.markdown&&((e,t)=>{const n=t.blocks.getCurrentBlockIndex(),r=t.blocks.getBlockByIndex(n);if(n<0||!r)return!1;const{isValidMDStatus:o,MDType:i}=((e,t)=>{const n=e.holder.textContent.trim();let r=!0,o="";const i=" "===t;if(n.length>7)return{isValidMDStatus:!1,MDType:o};switch(!0){case"#"===n&&i:o=M;break;case"##"===n&&i:o=N;break;case("###"===n||"####"===n||"#####"===n||"######"===n)&&i:o=B;break;case"-"===n&&i:o=z;break;case"1"===n&&i:o=$;break;case">"===n&&i:o=H;break;case"```"===n:o=U;break;default:r=!1}return{isValidMDStatus:r,MDType:o}})(r,e.data);if(!o)return!1;const{isInvalid:a,type:s,toolData:c,config:l}=q(i);I("_markdownBlockConfig: ",q(i)),a||(t.blocks.delete(n),t.blocks.insert(s,c,l,n),t.caret.setToBlock(n,"start"))})(e,t),n.inlineMarkdown&&((e,t)=>{const n=t.blocks.getCurrentBlockIndex(),r=t.blocks.getBlockByIndex(n);if(n<0||!r)return!1;const{isValid:o,md:i,html:a}=((e,t)=>{const n=e.holder.textContent.trim(),{BOLD:r,ITALIC:o,MARKER:i,INLINE_CODE:a}=V,s=n.match(r);if(s){const{isValid:e,md:t,content:n}=W(s);return{isValid:e,md:t,html:`<b>${n}</b>`}}const c=n.match(i);if(c){const{isValid:e,md:t,content:n}=W(c);return{isValid:e,md:t,html:`<mark class=cdx-marker>${n}</mark>`}}const l=n.match(o);if(l){const{isValid:e,md:t,content:n}=W(l);return{isValid:e,md:t,html:`<i>${n}</i>`}}const u=n.match(a);if(u){const{isValid:e,md:t,content:n}=W(u);return{isValid:e,md:t,html:`<code class=inline-code>${n}</code>`}}return{isValid:!1,text:""}})(r,e.data);o&&(x(`<span id="${D}" />`),e.target.innerHTML=e.target.innerHTML.replace(i,a),S(document.querySelector("#"+D)),document.querySelector("#"+D).remove(),x("&nbsp;"))})(e,t),n.mention&&(e=>{if("@"===e.data){const e=`<${l.mention} data-sign="@" class="${R}" contenteditable="false" id="${R}" tabindex="1">&nbsp;</${l.mention}>`,t="#"+R;x(e);const n=document.querySelector(t).parentElement;J("mentionParent: ",n),n.innerHTML=n.innerHTML.replace("@"+e,e),J("selectNode mentionId: ",t),S(document.querySelector(t))}})(e),n.emoji&&(e=>{if(":"===e.data){G("handleEmoji: ",e.data);const t=`<${l.emoji} class="${P}" contenteditable="false" id="${P}" tabindex="1">&nbsp;</${l.emoji}>`,n="#"+P;x(t);const r=document.querySelector(n).parentElement;r.innerHTML=r.innerHTML.replace(":"+t,t),S(document.querySelector(n))}})(e),n.linkCard&&((e,t)=>{const n=t.blocks.getCurrentBlockIndex(),r=t.blocks.getBlockByIndex(n);!(n<0)&&r&&((e,t)=>{const n=e.holder.textContent.trim(),r=" "===t;return!(!K.test(n)||!r)})(r,e.data)&&(t.blocks.delete(n),t.blocks.insert("linkCard",{link:"https://codex.so",meta:{title:"CodeX Team",site_name:"CodeX",description:"Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",image:{url:"https://codex.so/public/app/img/meta_img.png"}}},{},n),t.caret.setToBlock(n,"start"))})(e,t)},ue=(e,t,n={})=>{const r=Object.assign({markdown:!1,inlineMarkdown:!0,mention:!0,emoji:!0,linkCard:!1},n);t.listeners.on(e,"input",e=>X()(le(e,t,r),100))},de=(e,t)=>{t.listeners.off(e,"input",n=>le(e,t),!1),t.listeners.off(e,"keyup",e=>(e=>{if("Backspace"===e.code||"Delete"===e.code)if(window.getSelection){let e=window.getSelection();e.anchorNode.parentNode.className===R&&e.anchorNode.parentNode.remove()}else ce("window Selection is not supported.")})(e),!1)};var fe=n(2),pe=n.n(fe);const me=()=>(window.PubSub||(window.PubSub=pe.a),window.PubSub),he={KEEP_PARAGRAPH_AFTER_REMOVED:"KEEP_PARAGRAPH_AFTER_REMOVED"},be=e=>!!new RegExp("^(https:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e);n.d(t,"debounce",(function(){return Z.debounce})),n.d(t,"loadJS",(function(){return Y})),n.d(t,"loadCSS",(function(){return Q})),n.d(t,"isEmptyObj",(function(){return ee})),n.d(t,"findIndex",(function(){return te})),n.d(t,"insertAndShift",(function(){return ne})),n.d(t,"swapArrayItems",(function(){return re})),n.d(t,"isString",(function(){return oe})),n.d(t,"cutFrom",(function(){return ae})),n.d(t,"strLen",(function(){return ie})),n.d(t,"isLatinString",(function(){return se})),n.d(t,"isDOM",(function(){return g})),n.d(t,"make",(function(){return y})),n.d(t,"showElement",(function(){return _})),n.d(t,"hideElements",(function(){return A})),n.d(t,"replaceEl",(function(){return L})),n.d(t,"clazz",(function(){return h})),n.d(t,"importScript",(function(){return v})),n.d(t,"highlightSettingIcon",(function(){return C})),n.d(t,"moveCaretToEnd",(function(){return w})),n.d(t,"selectNode",(function(){return S})),n.d(t,"insertHtmlAtCaret",(function(){return x})),n.d(t,"keepCustomInlineToolOnly",(function(){return E})),n.d(t,"restoreDefaultInlineTools",(function(){return j})),n.d(t,"removeElementByClass",(function(){return O})),n.d(t,"convertElementToTextIfNeed",(function(){return T})),n.d(t,"convertElementToText",(function(){return F})),n.d(t,"enhanceBlock",(function(){return ue})),n.d(t,"freeEnhanceBlock",(function(){return de})),n.d(t,"buildLog",(function(){return s})),n.d(t,"initEventBus",(function(){return me})),n.d(t,"EVENTS",(function(){return he})),n.d(t,"CSS",(function(){return c})),n.d(t,"INLINE_BLOCK_TAG",(function(){return l})),n.d(t,"isValidURL",(function(){return be}))}])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){return document.querySelector(e)},c=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=s.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,u=0,d=[],f=n(5);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function m(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function g(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function v(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=l||(l=g(t)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),r=k.bind(null,n,t),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=S.bind(null,n),o=function(){b(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=m(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&p(m(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var C,w=(C=[],function(e,t){return C[e]=t,C.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function S(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function k(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".cdx-collapse {\n  width: 100%;\n}\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,'.cdx-collapse-wrapper {\n  margin-bottom: 1.2rem 0;\n}\n\n.cdx-collapse-header {\n  display: flex;\n  align-items: center;\n  padding: 10px 1px;\n}\n\n.cdx-collapse-title {\n  outline: none;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 5px;\n  font-size: 16px;\n  font-weight: bold;\n  font-variant: tabular-nums;\n  list-style: none;\n  font-feature-settings: "tnum";\n  position: relative;\n  display: inline-block;\n  width: 60%;\n  height: 32px;\n  border: none;\n  line-height: 1.2;\n  background-color: transparent;\n  background-image: none;\n  border-radius: 4px;\n  transition: all 0.3s;\n  cursor: text;\n}\n\n.cdx-collapse-title[placeholder]:empty:before {\n  content: attr(placeholder);\n  color: grey;\n  font-style: italic;\n}\n\n.cdx-collapse-toggle {\n  display: block;\n  transition: all 0.25s ease-out;\n  cursor: pointer;\n}\n\n.cdx-collapse-toggle::before {\n  content: " ";\n  display: inline-block;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 6px solid currentColor;\n  vertical-align: middle;\n  margin-right: 15px;\n  margin-top: -2px;\n  cursor: pointer;\n  transform: translateY(-1px);\n  transition: transform 0.3s ease-out;\n}\n\n.cdx-collapse-toggle-checked {\n  transform: rotate(90deg) translate(5px, 5px);\n}\n\n.cdx-collapse-content {\n  max-height: 0px;\n  overflow: hidden;\n  transition: max-height 0.3s cubic-bezier(0.6, -0.28, 0.74, 0.05);\n}\n\n.cdx-collapse-content-checked {\n  max-height: 350px;\n}\n\n.cdx-collapse-content .content-inner {\n  position: relative;\n  font-size: 1em;\n  border-left: 1px dashed;\n  border-left-color: #dddfe2;\n  margin-left: 6px;\n  padding: 6px 0;\n  padding-left: 22px;\n  padding-bottom: 26px;\n  line-height: 1.6em;\n  outline: none;\n  cursor: text;\n}\n\n.cdx-collapse-content .content-inner[placeholder]:empty:before {\n  content: attr(placeholder);\n  color: grey;\n  font-style: italic;\n}\n',""])},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));n(3),n(6);var r=n(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,a=void 0,a=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * Collapse Block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */(i,"string"),"symbol"===o(a)?a:String(a)),r)}var i,a}var a=function(){function e(t){var n=t.data,o=(t.config,t.api),i=t.setData;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=o,this._data=n,this.nodes={title:Object(r.make)("input",this.CSS.title,{placeholder:"Collapse","data-skip-plus-button":!0}),contentWrapper:Object(r.make)("div",this.CSS.content),content:Object(r.make)("div",this.CSS.contentInner,{contentEditable:!0,placeholder:"Collapse","data-skip-plus-button":!0}),toggleLabel:Object(r.make)("label",this.CSS.labelToggle,{"data-skip-plus-button":!0})},this._assignData(n),this._initListeners(),this.setData=i,this.isFolded=!0}var t,n,o;return t=e,(n=[{key:"CSS",get:function(){return{block:this.api.styles.block,wrapper:"cdx-collapse",collapseWrapper:"cdx-collapse-wrapper",header:"cdx-collapse-header",title:"cdx-collapse-title",labelToggle:"cdx-collapse-toggle",content:"cdx-collapse-content",contentInner:"content-inner",contentChecked:"cdx-collapse-content-checked",labelChecked:"cdx-collapse-toggle-checked"}}},{key:"_initListeners",value:function(e){var t=this;this.api.listeners.on(this.nodes.title,"input",(function(){var e=t.nodes.title.value;t.setData({title:e})})),this.api.listeners.on(this.nodes.content,"input",(function(){var e=t.nodes.content.innerHTML;t.setData({content:e})})),this.api.listeners.on(this.nodes.toggleLabel,"click",(function(){t.isFolded?t._unFoldContent():t._foldContent()}))}},{key:"_foldContent",value:function(){r.clazz.remove(this.nodes.contentWrapper,this.CSS.contentChecked),r.clazz.remove(this.nodes.toggleLabel,this.CSS.labelChecked),this.isFolded=!0}},{key:"_unFoldContent",value:function(){r.clazz.add(this.nodes.contentWrapper,this.CSS.contentChecked),r.clazz.add(this.nodes.toggleLabel,this.CSS.labelChecked),this.isFolded=!1}},{key:"_assignData",value:function(e){this._data=e;var t=this._data,n=t.title,r=t.content;this.nodes.title.value=n,this.nodes.content.innerHTML=r}},{key:"drawView",value:function(e){this._assignData(e);var t=Object(r.make)("div",[this.CSS.block,this.CSS.wrapper]);this.nodes.content.innerHTML=this._data.content;var n=Object(r.make)("div",this.CSS.collapseWrapper),o=Object(r.make)("div",this.CSS.header);return o.appendChild(this.nodes.toggleLabel),o.appendChild(this.nodes.title),this.nodes.contentWrapper.appendChild(this.nodes.content),n.appendChild(o),n.appendChild(this.nodes.contentWrapper),t.appendChild(n),t}},{key:"data",get:function(){var e={title:this.nodes.title.value,content:this.nodes.content.innerHTML};return this.setData(e),e}}])&&i(t.prototype,n),o&&i(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return(t=f(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function f(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * Collapse Block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */(e,"string");return"symbol"===s(t)?t:String(t)}var p=function(){function e(t){var n=t.data,r=(t.config,t.api);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=r;var o=n.title&&"string"==typeof n.title,i=n.content&&"string"==typeof n.content,s={title:o?n.title:"",content:i?n.content:""};this._data=s,this.ui=new a({data:this._data,api:r,setData:this.setData.bind(this)}),this.element=null}var t,n,r;return t=e,r=[{key:"enableLineBreaks",get:function(){return!1}},{key:"toolbox",get:function(){return{icon:'<svg width="19" t="1575117780012" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4865" width="200" height="200"><path d="M512 576l192 192H576v192H448v-192H320l192-192z m192-384H576V0H448v192H320l192 192 192-192z m256 128c0-35.2-28.8-64-64-64h-160l-64 64h192l-128 128h-448l-128-128h192l-64-64H128c-35.2 0-64 28.8-64 64l160 160L64 640c0 35.2 28.8 64 64 64h160l64-64h-192l128-128h448l128 128h-192l64 64H896c35.2 0 64-28.8 64-64l-160-160L960 320z" p-id="4866"></path></svg>',title:"Folding block"}}}],(n=[{key:"setData",value:function(e){this._data=l(l({},this._data),e)}},{key:"CSS",get:function(){return{settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive}}},{key:"render",value:function(){return this.element=this.ui.drawView(this._data),this.element}},{key:"reRender",value:function(){this.replaceElement(this.ui.drawView(this._data))}},{key:"replaceElement",value:function(e){this.element.replaceWith(e),this.element=e,this.api.tooltip.hide(),this.api.toolbar.close()}},{key:"save",value:function(e){return this.ui.data}}])&&d(t.prototype,n),r&&d(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()}]).default}));