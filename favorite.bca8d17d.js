!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire1b87;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequire1b87=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return l.default(e)||s.default(e)||c.default(e)||f.default()};var l=d(o("kMC0W")),s=d(o("7AJDX")),f=d(o("8CtQK")),c=d(o("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}e(a)((function t(r){"use strict";var n=this;e(u)(this,t),e(a)(this,"save",(function(e){try{window.localStorage.setItem(n.key,JSON.stringify(e))}catch(e){return null}})),e(a)(this,"get",(function(){try{return JSON.parse(window.localStorage.getItem(n.key))}catch(e){return null}})),e(a)(this,"remove",(function(){try{return localStorage.removeItem(n.key)}catch(e){return null}})),e(a)(this,"saveCard",(function(t){var r=n.get()||[],o=[t].concat(e(i)(r));n.save(o)})),e(a)(this,"deleteCard",(function(e){var t=n.get(),r=null==t?void 0:t.filter((function(t){return t.id!==e}));n.save(r)})),this.key=r}),"KEYS",{FAVORITE:"news/favorite",READ:"news/read"});var p,v,y;document.body.onload=function(){setTimeout((function(){var e=document.getElementById("page-preloader");e.classList.contains("done")||e.classList.add("done")}),1e3)};p=!1,v=document.querySelectorAll(".nav__link"),y=document.URL,v.forEach((function(e){y.includes(e.pathname)&&(e.classList.add("nav__link--current"),p=!0)})),!p&&document.querySelector('.nav__link[href*="/index.html"]').classList.add("nav__link--current")}();
//# sourceMappingURL=favorite.bca8d17d.js.map
