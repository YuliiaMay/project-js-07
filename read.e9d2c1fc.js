function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},s=n.parcelRequire1b87;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},n.parcelRequire1b87=s),s.register("kyEFX",(function(n,t){var r,s;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return s}),(function(e){return s=e}));var a={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)a[n[t]]=e[n[t]]},s=function(e){var n=a[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),s("kyEFX").register(JSON.parse('{"jewIc":"read.e9d2c1fc.js","8OQ7p":"icons.906ae435.svg","hmz2r":"read.9866b5b5.js","fcKtx":"read.92014899.js"}'));var a=s("lO70r"),o=s("bY2RE");let i=[];var c;c=new URL(s("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const d=new URL(c),l=document.querySelector(".acc__container"),u=document.querySelector(".empty-response__container"),_=document.querySelector(".acc__gallery");document.querySelector(".acc__day-block");let f=[],v=[],p=[],g="";!function(){try{i=(0,a.getDataFromLocalStorage)(o.READ_NEWS_KEY),0!==i.length&&(u.classList.add("is-hidden"),l.classList.remove("is-hidden"),i.map((e=>{const n=e.day;f.push(n)})),v=Array.from(new Set(f)),function(e,n){for(const t of e){console.log(t.day);for(const e of n)p.push(t)}}(i,v))}catch(e){console.log(e.message)}}(),function(e){for(const n of e){const n=e.map((e=>'<div class="acc-item">\n                    <button class="acc__date-btn">08.03.2023</button>\n                  </div>')).join("");return l.insertAdjacentHTML("afterbegin",n),n}}(v),g=i.map((({media:e,source:n,title:t,abstract:r,published_date:s,url:a,section:o,id:i})=>(e.map((e=>e["media-metadata"][2].url)),`<div class="card acc__card" data-id="${i}">\n                <div class="wrap__img">\n                  <img class="card__img is-reading" src="${e}" alt="${n}" />\n                  <button type="button" class="item-news__add-to-favorite>\n                  <span class="item-news__add-to-favorite-btn">\n                    Add to favorite\n                      <svg class="item-news__block-icon active-news-icon" width="16" height="16" viewBox="0 0 37 32">\n                              <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n                      </svg>\n                      </span>\n                              <span class="item-news__remove-to-favorite-btn">Remove from favorite\n                      <svg class="item-news__block-icon active-news-icon" width="16" height="16" viewBox="0 0 37 32">\n                              <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n                      </svg></span>\n                  </button>\n                </div>\n                <div class="news__card">\n                <div class="news__card--info">\n                <h2 class="card__title">${t.substr(0,55)}</h2>\n                <p class="card__description">${r.substr(0,100)+"..."}</p>\n                </div>\n                <div class="card__footer">\n                  <span class="card__date">${s}</span>\n                  <a class="card__ref" target="_blank"\n                  rel="noreferrer noopener">Read more</a>\n                </div>\n                </div>\n                <div class="categories">${o}</div>\n\n                <div class="read visually-hidden">\n                  <span class="read__main">Already read</span>\n                  <svg class="read__main-icon">\n                      <use class="icon" href="${d}#done""></use>\n                  </svg>\n                </div>                \n              </div>`))).join(""),_.insertAdjacentHTML("beforeend",g),l.addEventListener("click",(function(e){e.target.classList.toggle("active"),_.classList.toggle("active")})),s("gjiCh"),s("5Fmyj"),s("8FnLx"),s("epHO8");
//# sourceMappingURL=read.e9d2c1fc.js.map
