!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).VueSnip=t()}(this,(function(){"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r={directiveName:"snip",snipMethod:"css",maxLines:3,separators:[". ",", "," ",""],ellipsis:". . .",debugMode:!1,exposeSnipFunction:!1,snipFunctionName:"snipText"};function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}var l={method:"css",maxLines:3,ellipsis:". . .",midWord:!0},u=function(e){var t=window.getComputedStyle(e),n=parseFloat(t.height),r="normal"===t.lineHeight?1.2*parseFloat(t.fontSize):parseFloat(t.lineHeight);return 0===n&&0===r?0:Math.ceil(n/r)},f=function(e){var t=window.__JsSnipState.get(e),n=t.observer||new ResizeObserver((function(){e.clientWidth===t.prevWidth&&e.clientHeight===t.prevHeight||d(e)}));n.observe(e),t.observer=n},p=function(e){var t=window.__JsSnipState.get(e);t.observer&&t.observer.disconnect(),t.observer&&delete t.prevWidth,t.observer&&delete t.prevHeight,t.observer&&delete t.observer},d=function(e){var t=window.__JsSnipState.get(e);"css"!==t.method?"js"===t.method&&(function(e,t){var n=t.maxLines,r=t.midWord,o=t.fullText,i=t.ellipsis,a=r?[". ",", "," ",""]:[". ",", "," "];if(e.textContent=o,e.style.display="",e.style.webkitLineClamp="",e.style.webkitBoxOrient="",e.style.overflow="",!(n<=0||u(e)<=n)){var s={unprocessed:o,processed:""};a.forEach((function(t){var r,o=c(s.unprocessed.split(t));try{for(o.s();!(r=o.n()).done;){var a=r.value;if(e.textContent="".concat(s.processed).concat(a).concat(t).concat(i),u(e)>n){s.unprocessed=a;break}s.processed="".concat(s.processed).concat(a).concat(t)}}catch(e){o.e(e)}finally{o.f()}})),e.textContent="".concat(s.processed.trim()).concat(i)}}(e,t),t.prevWidth=e.clientWidth,t.prevHeight=e.clientHeight):function(e,t){var n=t.maxLines,r=t.fullText;e.textContent=r,e.style.display="-webkit-box",e.style.webkitLineClamp=n.toString(),e.style.webkitBoxOrient="vertical",e.style.overflow="hidden"}(e,t)},b=function(e,t){window.__JsSnipState||(window.__JsSnipState=new WeakMap);var n=window.__JsSnipState.get(e)||{},r=n.maxLines,o=n.method;n=i(i(i({},l),n),t);var a=!window.__JsSnipState.get(e);a&&(n.fullText=e.textContent),window.__JsSnipState.set(e,n);var s="js"===n.method,c=r!==n.maxLines||o!==n.method&&"css"===n.method;a?s&&"undefined"!=typeof ResizeObserver?f(e):d(e):(s&&"undefined"!=typeof ResizeObserver?f(e):p(e),c&&d(e))},v=function(){return function(e){!function(e){var t=window.__JsSnipState.get(e);e.textContent=t.fullText,e.style.display="",e.style.webkitLineClamp="",e.style.webkitBoxOrient="",e.style.overflow="",p(e),window.__JsSnipState.delete(e)}(e)}};return{install:function(e,o){var i;o=t(t({},r),o);var a=function(e,t){var n=t.value,r=t.arg;b(e,{maxLines:n,method:r})},s=function(e,t){var n=t.value,r=t.arg;b(e,{maxLines:n,method:r})},c=v(),l=parseFloat(e.version[0])>2;e.directive(o.directiveName,(n(i={},l?"mounted":"inserted",a),n(i,l?"updated":"update",s),n(i,l?"unmounted":"unbind",c),i))}}}));
