!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=362)}({131:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},132:function(e,t,n){"use strict";var r=n(14);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},133:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},134:function(e,t,n){"use strict";(function(t){var r=n(14),o=n(351),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,u={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n(135)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(i)})),e.exports=u}).call(this,n(350))},135:function(e,t,n){"use strict";var r=n(14),o=n(352),i=n(132),a=n(354),s=n(357),u=n(358),c=n(136);e.exports=function(e){return new Promise((function(t,l){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password||"";d.Authorization="Basic "+btoa(m+":"+h)}var v=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,l,r),p=null}},p.onabort=function(){p&&(l(c("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){l(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(c(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var y=n(359),g=(e.withCredentials||u(v))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),l(e),p=null)})),void 0===f&&(f=null),p.send(f)}))}},136:function(e,t,n){"use strict";var r=n(353);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},137:function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(i,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])})),r.forEach(a,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}));var s=o.concat(i).concat(a),u=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return r.forEach(u,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},138:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},139:function(e,t,n){e.exports=n(345)},14:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(131),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return void 0===e}function u(e){return null!==e&&"object"===r(e)}function c(e){return"[object Function]"===i.call(e)}function l(e,t){if(null!=e)if("object"!==r(e)&&(e=[e]),a(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isUndefined:s,isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return u(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function n(n,o){"object"===r(t[o])&&"object"===r(n)?t[o]=e(t[o],n):t[o]=n}for(var o=0,i=arguments.length;o<i;o++)l(arguments[o],n);return t},deepMerge:function e(){var t={};function n(n,o){"object"===r(t[o])&&"object"===r(n)?t[o]=e(t[o],n):"object"===r(n)?t[o]=e({},n):t[o]=n}for(var o=0,i=arguments.length;o<i;o++)l(arguments[o],n);return t},extend:function(e,t,n){return l(t,(function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},343:function(e,t,n){},344:function(e,t,n){},345:function(e,t,n){"use strict";var r=n(14),o=n(131),i=n(346),a=n(137);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=s(n(134));u.Axios=i,u.create=function(e){return s(a(u.defaults,e))},u.Cancel=n(138),u.CancelToken=n(360),u.isCancel=n(133),u.all=function(e){return Promise.all(e)},u.spread=n(361),e.exports=u,e.exports.default=u},346:function(e,t,n){"use strict";var r=n(14),o=n(132),i=n(347),a=n(348),s=n(137);function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},u.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=u},347:function(e,t,n){"use strict";var r=n(14);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},348:function(e,t,n){"use strict";var r=n(14),o=n(349),i=n(133),a=n(134);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},349:function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},350:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||l||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},351:function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},352:function(e,t,n){"use strict";var r=n(136);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},353:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},354:function(e,t,n){"use strict";var r=n(355),o=n(356);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},355:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},356:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},357:function(e,t,n){"use strict";var r=n(14),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},358:function(e,t,n){"use strict";var r=n(14);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},359:function(e,t,n){"use strict";var r=n(14);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},360:function(e,t,n){"use strict";var r=n(138);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},361:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},362:function(e,t,n){"use strict";n.r(t);n(343),n(344);var r={loginCardBody:document.getElementById("login-card"),form:document.forms.loginForm,btnSignUp:document.getElementById("btnSignUp"),inputEmail:document.getElementById("email"),inputPassword:document.getElementById("password")},o={email:/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-z]{1,5}|[0-9]{1,3})(\]?)$/,password:/^[0-9a-zA-Z]{4,}$/};function i(e){var t=e.dataset.required;return!o[t]||o[t].test(e.value)}function a(e){var t=e.parentElement,n=function(e){return'\n  <div class="invalid-feedback">'.concat(e,"</div>\n  ")}(e.dataset.invalidMessage||"Invalid input");e.classList.add("is-invalid"),t.insertAdjacentHTML("beforeend",n)}var s=n(139),u={apiURL:"https://mlp-demo.herokuapp.com/api/public"};function c(e){if(!e.url.includes("auth")){var t=localStorage.getItem("my_app_token");e.headers["x-access-token"]=t}return e}function l(e){if(e.config.url.includes("login")){var t=e.data.token;localStorage.setItem("my_app_token",t)}return e}function f(e){return e.data}function d(e){return console.dir(e),Promise.reject(e)}var p=n.n(s).a.create({baseURL:u.apiURL,headers:{"Content-Type":"application/json"}});!function(e){e.interceptors.request.use(c),e.interceptors.response.use(l),e.interceptors.response.use(f,d)}(p);var m,h=p;function v(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){v(i,r,o,a,s,"next",e)}function s(e){v(i,r,o,a,s,"throw",e)}a(void 0)}))}}function g(e,t){return b.apply(this,arguments)}function b(){return(b=y(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.post("/auth/login",JSON.stringify({email:t,password:n}));case 3:return r=e.sent,console.log(r),e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(e,t,n,r,o,i,a,s,u,c,l,f){return x.apply(this,arguments)}function x(){return(x=y(regeneratorRuntime.mark((function e(t,n,r,o,i,a,s,u,c,l,f,d){var p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.post("/auth/signup",JSON.stringify({email:t,password:n,nickname:r,first_name:o,last_name:i,phone:a,gender_orientation:s,city:u,country:c,date_of_birth_day:l,date_of_birth_month:f,date_of_birth_year:d}));case 3:return p=e.sent,console.log(p),e.abrupt("return",p.data);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function E(){return document.querySelector(".notify-container")}function S(e,t,n){return'\n  <div class = "alert '.concat(t,'" data-index = "').concat(n,'">\n  ').concat(e,"\n  </div>\n  ")}function C(){document.body.insertAdjacentHTML("afterbegin",'\n    <div class = "notify-container" style = "position: fixed; top: 10px; right: 10px; z-index: 99"></div>\n  ')}function R(){return document.querySelectorAll(".notify-container .alert").length}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.msg,n=void 0===t?"Info message":t,r=e.className,o=void 0===r?"alert-info":r,i=e.timeout,a=void 0===i?2e3:i;E()||C();var s=R(),u=S(n,o,s),c=E();c.insertAdjacentHTML("beforeend",u),setTimeout((function(){return j(s)}),a)}function j(e){var t;(t=void 0===e?document.querySelector(".notify-container .alert"):document.querySelector('.notify-container .alert[data-index="'.concat(e,'"]')))?E().removeChild(t):console.warn("Alert not found")}function L(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){L(i,r,o,a,s,"next",e)}function s(e){L(i,r,o,a,s,"throw",e)}a(void 0)}))}}function P(){return _.apply(this,arguments)}function _(){return(_=k(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get("/location/get-countries");case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function B(e){return A.apply(this,arguments)}function A(){return(A=k(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get("/location/get-cities/".concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function N(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){N(i,r,o,a,s,"next",e)}function s(e){N(i,r,o,a,s,"throw",e)}a(void 0)}))}}function q(){return I.apply(this,arguments)}function I(){return(I=O(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:for(t=e.sent,m=Object.values(t),n="",r=0;r<m.length;r++)n+='\n     <option value="'.concat(m[r],'"> \n     ');return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){var e,t=document.getElementById("country");t.addEventListener("change",O(regeneratorRuntime.mark((function n(){var r,o,i,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=m.indexOf(t.value)+1,n.next=3,B(r);case 3:for(e=n.sent,o=document.createDocumentFragment(),i=0;i<e.length;i++)(a=document.createElement("option")).setAttribute("value","".concat(e[i])),o.appendChild(a);document.getElementById("city").removeAttribute("disabled"),document.getElementById("datalistCity").appendChild(o);case 10:case"end":return n.stop()}}),n)}))))}function D(e){return e.remove()}function F(){var e=document.getElementById("registration-card");e.firstElementChild.firstElementChild.addEventListener("click",(function(t){D(e),document.querySelector(".form-card").insertAdjacentHTML("afterbegin",'\n  <div class="card-body" id="login-card">\n  <h4 class="card-title">Please Login or <button type="button" class="btn btn-secondary"> Sign up</button> </h4>\n  <form name="loginForm">\n    <div class="form-group">\n      <label for="email">Email address</label>\n      <input\n        type="email"\n        class="form-control"\n        id="email"\n        aria-describedby="emailHelp"\n        placeholder="Enter email"\n        data-required="email"\n        data-invalid-message="Please provide valid email example@example.com"\n      />\n    </div>\n    <div class="form-group">\n      <label for="password">Password</label>\n      <input\n        type="password"\n        class="form-control"\n        id="password"\n        placeholder="Password"\n        data-required="password"\n      />\n    </div>\n    <button type="submit" class="btn btn-primary">Submit</button>\n  </form>\n</div>\n  '),M()}))}function M(){var e=document.getElementById("login-card");e.firstElementChild.firstElementChild.addEventListener("click",function(){var t=O(regeneratorRuntime.mark((function t(n){var r,o,a,s,u,c,l,f,d,p,m,h,v,y,g,b,x,E,S,C;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C=function(){return(C=O(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g.every((function(e){var t=i(e);return t||showInputError(e),t}))){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,w(d.value,p.value,m.value,u.value,c.value,h.value,f.value,v.value,y.value,b,x,E);case 5:s.reset();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},S=function(){return C.apply(this,arguments)},D(e),r=document.querySelector(".form-card"),t.next=6,q();case 6:o=t.sent,r.insertAdjacentHTML("afterbegin",'\n <div class="card-body" id="registration-card">\n    <h4 class="card-title">Please Sign up or <button type="button" class="btn btn-secondary" id="btnLogin">Login</button> </h4>\n    <form name="registrationForm">\n        <div class="form-group">\n            <div class="row">\n              <div class="col">\n                <label for="firstName">First name</label>\n                <input type="text" class="form-control" id="firstName" placeholder="First name" aria-label="First name">\n              </div>\n              <div class="col">\n                <label for="last_name">Last name</label>\n                <input type="text" class="form-control" id="last_name" placeholder="Last name" aria-label="Last name">\n              </div>\n            </div>\n        </div>\n        <div class="form-group">\n          <div class="row">\n            <div class="col">\n              <label for="date_of_birth"> Date of birth </label>\n              <input type="text" class="form-control" id="date_of_birth" placeholder="dd.mm.yyyy" aria-label="Date of birth">\n            </div>\n            <div class="col">\n              <label for="gender_orientation" class="form-label">Gender orientation</label>\n              <select class="form-select form-control" id="gender_orientation" required>\n                <option selected disabled value="">Choose...</option>\n                <option>Male</option>\n                <option>Female</option>\n              </select>\n              <div class="invalid-tooltip">\n                Please select a valid state.\n              </div>\n            </div>\n          </div>\n        </div>             \n      <div class="form-group">\n        <label for="email">Email address</label>\n        <input\n          type="email"\n          class="form-control"\n          id="email"\n          aria-describedby="emailHelp"\n          placeholder="Enter email"\n          data-required="email"\n          data-invalid-message="Please provide valid email example@example.com"\n        />\n      </div>\n      <div class="form-group">\n        <label for="password">Password</label>\n        <input\n          type="password"\n          class="form-control"\n          id="password"\n          placeholder="Password"\n          data-required="password"\n        />\n      </div>\n      <div class="form-group">\n          <label for="nickname">Nickname</label>\n          <input\n            type="text"\n            class="form-control"\n            id="nickname"\n            placeholder="Nickname"\n          />\n        </div>\n        <div class="form-group">\n          <label for="phone">Phone</label>\n          <input\n            type="number"\n            class="form-control"\n            id="phone"\n            placeholder="Phone"\n          />\n        </div>\n        <div class="form-group">\n            <div class="row">\n            <div class="col">\n              <label for="country">Country</label>\n              <input type="text" class="form-control" list="datalistCountry" id="country" placeholder="Country" aria-label="country">\n              <datalist id="datalistCountry">\n                '.concat(o,'\n              </datalist>\n            </div>\n            <div class="col">\n              <label for="city"> City </label>\n              <input type="text" \n              class="form-control" \n              list="datalistCity" \n              id="city" \n              placeholder="City" \n              aria-label="City"\n              disabled>\n              <datalist id="datalistCity"> </datalist>\n            </div>\n            </div>\n        </div>\n      <button type="submit" class="btn btn-primary">Submit</button>\n    </form>\n</div>\n ')),U(),a={signUpCardBody:document.getElementById("registration-card"),btnLogin:document.getElementById("btnLogin"),form:document.forms.registrationForm,firstName:document.getElementById("firstName"),lastName:document.getElementById("last_name"),date_of_birth:document.getElementById("date_of_birth"),gender_orientation:document.getElementById("gender_orientation"),email:document.getElementById("email"),password:document.getElementById("password"),nickname:document.getElementById("nickname"),phone:document.getElementById("phone"),city:document.getElementById("city"),country:document.getElementById("country")},u=a.firstName,c=a.lastName,l=a.date_of_birth,f=a.gender_orientation,m=a.nickname,h=a.phone,v=a.city,y=a.country,g=[d=a.email,p=a.password],(s=a.form).addEventListener("submit",(function(e){e.preventDefault();var t=l.value.split(".",3);b=+t[0],x=+t[1],E=+t[2],S()})),F();case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}function H(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function z(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){H(i,r,o,a,s,"next",e)}function s(e){H(i,r,o,a,s,"throw",e)}a(void 0)}))}}var J=r.form,$=r.inputEmail,X=r.inputPassword,V=[$,X];function Z(){return(Z=z(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V.every((function(e){var t=i(e);return t||a(e),t}))){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,g($.value,X.value);case 6:J.reset(),T({mas:"Login success",className:"alert-success"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),T({mas:"Login faild",className:"alert-danger"});case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}J.addEventListener("submit",(function(e){e.preventDefault(),function(){Z.apply(this,arguments)}()})),V.forEach((function(e){return e.addEventListener("focus",(function(){return function(e){var t=e.parentElement,n=t.querySelector(".invalid-feedback");n&&(e.classList.remove("is-invalid"),t.removeChild(n))}(e)}))})),M()}});