function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=r.parcelRequire1b87;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},r.parcelRequire1b87=o),o.register("bY2RE",(function(t,r){e(t.exports,"READ_NEWS_KEY",(function(){return s}));var n=o("2shzp"),a=o("lO70r");new(0,o("7Dt2W").default);const s="read-news",i=document.querySelector(".news__gallery");let u=null;i&&i.addEventListener("click",(async function(e){if("A"!==e.target.nodeName)return;const t=(0,a.getDataFromLocalStorage)(s),r=e.target.closest(".card").dataset.id,o=await async function(){let{data:e}=await n.default.get("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A");return e}();u=o.results,console.log(u);const i=(new Date).toLocaleString().slice(0,10),l=u.find((({id:e})=>Number(e)===Number(r)));l.day=i,console.log(l),void 0!==l&&t.every((e=>Number(r)!==Number(e.id)))&&(t.push(l),(0,a.setDataToLocalStorage)(s,t))}))})),o.register("7Dt2W",(function(r,n){e(r.exports,"default",(function(){return i}));var a=o("iJYdK"),s=o("2shzp");class i{async searchNews(){const e=`${this.baseUrl}/articlesearch.json?q=${this.query}&api-key=${this.apiKey}&page=${this.page}`;return await s.default.get(e).then((e=>{if(200!==e.status||0===e.data.response.docs.length)throw new Error(e.status);return e.data}))}nextPage(){this.page+=1}constructor(e){t(a)(this,"baseUrl","https://api.nytimes.com/svc/search/v2"),t(a)(this,"apiKey","1CftshpIbKCwUhOxVLAbMSPcGc2N2XMQ"),this.query=e,this.page=0}}})),o.register("iJYdK",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));
//# sourceMappingURL=read.92014899.js.map