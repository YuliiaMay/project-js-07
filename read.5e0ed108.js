const e=document.querySelector(".read__list-date");console.log(e);const n=document.querySelector(".read__list");console.log(n);document.body.onload=function(){setTimeout((function(){let e=document.getElementById("page-preloader");e.classList.contains("done")||e.classList.add("done")}),1e3)};!function(){let e=!1;const n=document.querySelectorAll(".nav__link"),t=document.URL;n.forEach((n=>{t.includes(n.pathname)&&(n.classList.add("nav__link--current"),e=!0)})),!e&&document.querySelector('.nav__link[href*="/index.html"]').classList.add("nav__link--current")}();
//# sourceMappingURL=read.5e0ed108.js.map
