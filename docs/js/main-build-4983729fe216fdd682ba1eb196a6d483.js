webpackJsonp([0],[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(1),r=o(n(2)),a=o(n(11));n(13);new a.default.communityHeader({apiKey:"5cb6763f264e31381e18639a1147634c",indexName:"react-instantsearch",inputSelector:"#searchbox"}),document.querySelector(".documentation-container");var c=document.querySelectorAll(".code-sample");(0,r.default)(c);var u=document.querySelector(".sidebar");if(u){var l=document.querySelector(".algc-navigation").getBoundingClientRect().height;document.querySelector(".documentation-container");(0,i.fixSidebar)({sidebarContainer:u,topOffset:l})}},function(t,e,n){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.fixSidebar=function(t){var e=t.sidebarContainer,n=t.topOffset,o=e.parentElement,i=function(t,e,n){var o=t.getBoundingClientRect(),i=e.getBoundingClientRect(),r=document.body.getBoundingClientRect(),a=o.top-r.top,c=i.top-r.top-a,u=a-n,l=o.height+a-i.height-c-n;return{start:u,stop:l}}(o,e,n);o.style.position="relative";var r=function(){var t=window.pageYOffset;i.start,i.stop,t>i.start||0===t?t>i.stop?(e.style.position="absolute",e.style.bottom="0",e.classList.remove("fixed")):(e.style.position=null,e.style.bottom=null,e.classList.add("fixed")):e.classList.remove("fixed")};window.addEventListener("load",r),document.addEventListener("DOMContentLoaded",r),document.addEventListener("scroll",r)},e.followSidebarNavigation=function(t,e){var n=o(t),i=o(e),r=function(t){n.forEach(function(e){var n=e.getAttribute("href"),o="#".concat(t.getAttribute("id"));-1!=n.indexOf(o)?e.classList.add("navItem-active"):e.classList.remove("navItem-active")})},a=function(){var t=i.map(function(t){return{element:t,rect:t.getBoundingClientRect()}}).filter(function(t){var e=t.rect;return e.top<window.innerHeight/3&&e.bottom<window.innerHeight}).sort(function(t,e){return Math.abs(t.rect.top)<Math.abs(e.rect.top)?-1:1});i[0]&&0===t.length?r(i[0]):t[0]&&r(t[0].element)};a(),window.addEventListener("load",a),document.addEventListener("DOMContentLoaded",a),document.addEventListener("scroll",a)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){t.forEach(function(t){var e,n=document.createElement("button"),i=t.getAttribute("data-code-type"),r=function(){clearTimeout(e),n.innerHTML='<i class="icon icon-copy"></i>',n.setAttribute("title","copy"),n.classList.remove("clipboard-done"),n.classList.add("clipboard")},a=new o.default(n,{text:function(){return t.querySelector("code").textContent}});r();var c=document.createElement("div");c.className="heading",c.innerHTML="Command"===i?"Command":"Code",c.appendChild(n),t.parentNode.insertBefore(c,t),n.addEventListener("mouseleave",r,!0),a.on("success",function(){n.classList.add("clipboard-done"),n.textContent="Copied!",e=setTimeout(r,800)})})};var o=function(t){return t&&t.__esModule?t:{default:t}}(n(3))},function(t,e,n){var o,i,r;!function(a,c){i=[t,n(4),n(6),n(7)],void 0===(r="function"==typeof(o=c)?o.apply(e,i):o)||(t.exports=r)}(0,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var a=i(e),c=i(n),u=i(o),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),f=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,c.default),s(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===l(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,u.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return r("action",t)}},{key:"defaultTarget",value:function(t){var e=r("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return r("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}();t.exports=f})},function(t,e,n){var o,i,r;!function(a,c){i=[t,n(5)],void 0===(r="function"==typeof(o=c)?o.apply(e,i):o)||(t.exports=r)}(0,function(t,e){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(e),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=r})},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},t.exports=n},function(t,e,n){var o=n(8),i=n(9);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}(t,e,n);if(o.string(t))return function(t,e,n){return i(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var o=n(10);t.exports=function(t,e,n,i,r){var a=function(t,e,n,i){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&i.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}},function(t,e){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}t.exports=function(t,e){for(;t&&t.nodeType!==n;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){const o={communityHeader:n(12)};t.exports=o},,function(t,e){if(document.querySelector(".documentation-container")){var n=document.createElement("a");n.classList.add("editThisPage"),n.textContent="Edit this page";var o="https://github.com/algolia/jekyll-algolia/edit/develop/",i=document.location.pathname.replace("/jekyll-algolia","");/\/$/.test(i)&&(i+="index.html"),o+="".concat("docs-src/src").concat(i.replace(".html",".md")),i=i.replace(".html",".md"),n.href=o,document.querySelector(".documentation-container").appendChild(n)}}],[0]);
//# sourceMappingURL=main-build.js.map