var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire1b87;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequire1b87=o),o.register("dVhPh",(function(e,t){var n,r,a,s;n=e.exports,r="onBtnFavoriteClick",a=function(){return u},Object.defineProperty(n,r,{get:a,set:s,enumerable:!0,configurable:!0});var i=o("2shzp"),l=o("lO70r");const c=document.querySelector(".news__gallery");console.log(c);c&&c.addEventListener("click",u);let d=null;async function u(e){try{const t=e.target.closest(".item-news__add-to-favorite");if(!t)return;t.classList.toggle("hidden-span");const n=t.closest(".card").dataset.id,o=(0,l.getDataFromLocalStorage)("news"),r=o.findIndex((({id:e})=>Number(e)===Number(n)));if(console.log("indexElem ",r),r>-1)o.splice(r,1);else{if(!d){const{results:e}=await async function(){let{data:e}=await i.default.get("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A");return e}();d=e}const e=d.find((({id:e})=>Number(e)===Number(n)));o.push(e)}(0,l.setDataToLocalStorage)("news",o)}catch(e){console.log(e.message)}}}));
//# sourceMappingURL=index.728f1771.js.map
