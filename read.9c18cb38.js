function e(e,n,r,t){Object.defineProperty(e,n,{get:r,set:t,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=n.parcelRequire1b87;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){t[e]=n},n.parcelRequire1b87=o),o.register("kyEFX",(function(n,r){var t,o;e(n.exports,"register",(function(){return t}),(function(e){return t=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var s={};t=function(e){for(var n=Object.keys(e),r=0;r<n.length;r++)s[n[r]]=e[n[r]]},o=function(e){var n=s[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o("kyEFX").register(JSON.parse('{"jewIc":"read.9c18cb38.js","8OQ7p":"icons.906ae435.svg","hmz2r":"read.b486b5df.js","fcKtx":"read.65c9c430.js"}'));var s,a=o("lO70r"),i=o("aFV0K"),c=o("bY2RE");s=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const l=new URL(s),d=document.querySelector(".acc__container"),u=document.querySelector(".empty-response__container");let f=[],p=[],b="",g=[],_=[];!function(){try{_=(0,a.getDataFromLocalStorage)(c.READ_NEWS_KEY),0!==_.length&&(u.classList.add("is-hidden"),d.classList.remove("is-hidden"),d.insertAdjacentHTML("afterbegin",function(){_.map((e=>{const n=e.day;f.push(n)})),p=Array.from(new Set(f));const e=p.filter((e=>void 0!==e)).sort(((e,n)=>n.localeCompare(e)));for(let n=0;n<e.length;n+=1){g=_.filter((r=>r.day===e[n]));const r=g.map((e=>(0,i.createObj)(e))),t=(0,i.fetchNews)(r,d,!1).join("");b+=`<div class="read-news__list">\n          <button class="read-news__btn js-read-news-btn">\n            <span>${e[n]}</span>\n            <svg><use href="${l}#down"></use></svg>\n          </button>\n          <div class="news__lists">\n            ${t}\n          </div>\n          </div>`}return b}()))}catch(e){console.log(e.message)}}(),o("gjiCh"),o("5Fmyj"),o("8FnLx"),o("epHO8"),o("4S0r6");
//# sourceMappingURL=read.9c18cb38.js.map