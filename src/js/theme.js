let changeThemeToggle = document.querySelector('.switch__input')
let changeThemeToggleMobile = document.querySelector('.mob-switch__input')

changeThemeToggle.addEventListener('click', function () {
    let theme = changeThemeToggle.dataset.theme;

    if(theme === 'dark' || theme === null){
    document.getElementById('swith_label').classList.remove(`switch-${theme}`);
    document.getElementById('switch_slider').classList.remove(`switch__slider-${theme}`);
    document.body.classList.remove(`body__bg-${theme}`);
    document.querySelector('.header-container').classList.remove(`font__theme-${theme}`);
    document.getElementById('span-light').classList.remove(`theme-switch__light-on-${theme}`);
    document.getElementById('span-dark').classList.remove(`theme-switch__dark-on-${theme}`);
    document.querySelector('.search__input').classList.remove(`search__input-theme-${theme}`);
    document.querySelector('.search__btn').classList.remove(`search__btn-${theme}`);
    document.querySelector('.search__btn-mobile').classList.remove(`mob-search-theme-${theme}`);
    document.querySelector('.menu-open').classList.remove(`mob-search-theme-${theme}`);
    if(document.getElementsByClassName('calendar_input').length){
        document.querySelector('.calendar_input').classList.remove(`calendar_input__border-${theme}`);
      }
        theme = 'light'
    document.getElementById('swith_label').classList.add(`switch-${theme}`);
    document.getElementById('switch_slider').classList.add(`switch__slider-${theme}`);
    document.body.classList.add(`body__bg-${theme}`);
    document.querySelector('.header-container').classList.add(`font__theme-${theme}`);
    document.getElementById('span-light').classList.add(`theme-switch__light-on-${theme}`);
    document.getElementById('span-dark').classList.add(`theme-switch__dark-on-${theme}`);
    document.querySelector('.search__input').classList.add(`search__input-theme-${theme}`);
    document.querySelector('.search__btn').classList.add(`search__btn-${theme}`);
    document.querySelector('.search__btn-mobile').classList.add(`mob-search-theme-${theme}`);
    document.querySelector('.menu-open').classList.add(`mob-search-theme-${theme}`);
    if(document.getElementsByClassName('calendar_input').length){
        document.querySelector('.calendar_input').classList.add(`calendar_input__border-${theme}`);
      }
    } else if (theme === 'light') {
    document.getElementById('swith_label').classList.remove(`switch-${theme}`);
    document.getElementById('switch_slider').classList.remove(`switch__slider-${theme}`);
    document.body.classList.remove(`body__bg-${theme}`);
    document.querySelector('.header-container').classList.remove(`font__theme-${theme}`);
    document.getElementById('span-light').classList.remove(`theme-switch__light-on-${theme}`);
    document.getElementById('span-dark').classList.remove(`theme-switch__dark-on-${theme}`);
    document.querySelector('.search__input').classList.remove(`search__input-theme-${theme}`);
    document.querySelector('.search__btn').classList.remove(`search__btn-${theme}`);
    document.querySelector('.search__btn-mobile').classList.remove(`mob-search-theme-${theme}`);
    document.querySelector('.menu-open').classList.remove(`mob-search-theme-${theme}`);
    if(document.getElementsByClassName('calendar_input').length){
        document.querySelector('.calendar_input').classList.remove(`calendar_input__border-${theme}`);
      }
        theme = 'dark'
    document.getElementById('swith_label').classList.add(`switch-${theme}`);
    document.getElementById('switch_slider').classList.add(`switch__slider-${theme}`);
    document.body.classList.add(`body__bg-${theme}`);
    document.querySelector('.header-container').classList.add(`font__theme-${theme}`);
    document.getElementById('span-light').classList.add(`theme-switch__light-on-${theme}`);
    document.getElementById('span-dark').classList.add(`theme-switch__dark-on-${theme}`);
    document.querySelector('.search__input').classList.add(`search__input-theme-${theme}`);
    document.querySelector('.search__btn').classList.add(`search__btn-${theme}`);
    document.querySelector('.search__btn-mobile').classList.add(`mob-search-theme-${theme}`);
    document.querySelector('.menu-open').classList.remove(`mob-search-theme-${theme}`);
    if(document.getElementsByClassName('calendar_input').length){
        document.querySelector('.calendar_input').classList.add(`calendar_input__border-${theme}`);
      }
    } 
    changeTheme(theme);  

})

function changeTheme(themeName) {   
    changeThemeToggle.setAttribute('data-theme', `${themeName}`)
    changeThemeToggleMobile.setAttribute('data-theme-mob', `${themeName}`)  
    localStorage.setItem('theme', themeName);
    localStorage.setItem('themeMob', themeName);
}

let activeTheme = localStorage.getItem('theme')

if(activeTheme === null || activeTheme === 'light') {
    changeTheme('light');
    document.getElementById('swith_label').classList.add(`switch-light`);
    document.getElementById('switch_slider').classList.add(`switch__slider-light`);
    document.body.classList.add(`body__bg-light`);
    document.getElementById('span-light').classList.add(`theme-switch__light-on-light`);
    document.getElementById('span-dark').classList.add(`theme-switch__dark-on-light`);
    document.querySelector('.search__input').classList.add(`search__input-theme-light`);
    document.querySelector('.search__btn').classList.add(`search__btn-light`)
    document.querySelector('.search__btn-mobile').classList.add(`mob-search-theme-light`);
    document.querySelector('.menu-open').classList.add(`mob-search-theme-light`);
    if(document.getElementsByClassName('calendar_input').length){
        document.querySelector('.calendar_input').classList.add(`calendar_input__border-light`);
      }
} else if (activeTheme === 'dark') {
    changeTheme('dark');
    document.getElementById('swith_label').classList.add(`switch-dark`);
    document.getElementById('switch_slider').classList.add(`switch__slider-dark`);
    document.body.classList.add(`body__bg-dark`);
    document.getElementById('span-light').classList.add(`theme-switch__light-on-dark`);
    document.getElementById('span-dark').classList.add(`theme-switch__dark-on-dark`);
    document.querySelector('.search__input').classList.add(`search__input-theme-dark`);
    document.querySelector('.search__btn').classList.add(`search__btn-dark`);
    document.querySelector('.search__btn-mobile').classList.add(`mob-search-theme-dark`);
    document.querySelector('.menu-open').classList.add(`mob-search-theme-dark`);
    if(document.getElementsByClassName('calendar_input').length){
        document.querySelector('.calendar_input').classList.add(`calendar_input__border-light`);
      }

    changeThemeToggle.setAttribute('checked','');
    changeThemeToggleMobile.setAttribute('checked','');
}

//===========switcher mobile menu ============

changeThemeToggleMobile.addEventListener('click', function () {
    let themeMob = changeThemeToggleMobile.dataset.themeMob;

    if(themeMob === 'dark' || themeMob === null){
    document.getElementById('mob-swith_label').classList.remove(`mob-switch-${themeMob}`);
    document.getElementById('mob-switch_slider').classList.remove(`mob-switch__slider-${themeMob}`);
    document.querySelector('.mob-menu__container').classList.remove(`mob-menu__burger-${themeMob}`);
    document.querySelector('.search__btn-mobile').classList.remove(`mob-search-theme-${themeMob}`);
    document.querySelector('.menu-open').classList.remove(`mob-search-theme-${themeMob}`);
        themeMob = 'light'
    document.getElementById('mob-swith_label').classList.add(`mob-switch-${themeMob}`);
    document.getElementById('mob-switch_slider').classList.add(`mob-switch__slider-${themeMob}`);
    document.querySelector('.mob-menu__container').classList.add(`mob-menu__burger-${themeMob}`);
    document.querySelector('.search__btn-mobile').classList.add(`mob-search-theme-${themeMob}`);
    document.querySelector('.menu-open').classList.add(`mob-search-theme-${themeMob}`);
  
    } else if (themeMob === 'light') {
    document.getElementById('mob-swith_label').classList.remove(`mob-switch-${themeMob}`);
    document.getElementById('mob-switch_slider').classList.remove(`mob-switch__slider-${themeMob}`);
    document.querySelector('.mob-menu__container').classList.remove(`mob-menu__burger-${themeMob}`);
    document.querySelector('.search__btn-mobile').classList.remove(`mob-search-theme-${themeMob}`);
    document.querySelector('.menu-open').classList.remove(`mob-search-theme-${themeMob}`);
    
        themeMob = 'dark'
    document.getElementById('mob-swith_label').classList.add(`mob-switch-${themeMob}`);
    document.getElementById('mob-switch_slider').classList.add(`mob-switch__slider-${themeMob}`);
    document.querySelector('.mob-menu__container').classList.add(`mob-menu__burger-${themeMob}`);
    document.querySelector('.search__btn-mobile').classList.add(`mob-search-theme-${themeMob}`);
    document.querySelector('.menu-open').classList.add(`mob-search-theme-${themeMob}`);
    
    } 
    changeThemeMob(themeMob);  

})

function changeThemeMob(themeNameMob) {   
    changeThemeToggleMobile.setAttribute('data-theme-mob', `${themeNameMob}`)
    changeThemeToggle.setAttribute('data-theme', `${themeNameMob}`)  
    localStorage.setItem('themeMob', themeNameMob);
    localStorage.setItem('theme', themeNameMob);
}

let activeThemeMob = localStorage.getItem('themeMob')

if(activeThemeMob=== null || activeThemeMob === 'light') {
    changeThemeMob('light');
    document.getElementById('mob-swith_label').classList.add(`mob-switch-light`);
    document.getElementById('mob-switch_slider').classList.add(`mob-switch__slider-light`);
    document.querySelector('.mob-menu__container').classList.add(`mob-menu__burger-light`);
    document.querySelector('.search__btn-mobile').classList.add(`mob-search-theme-light`);
    document.querySelector('.menu-open').classList.add(`mob-search-theme-light`);
   
} else if (activeThemeMob === 'dark') {
    changeThemeMob('dark');
    document.getElementById('mob-swith_label').classList.add(`mob-switch-dark`);
    document.getElementById('mob-switch_slider').classList.add(`mob-switch__slider-dark`);
    document.querySelector('.mob-menu__container').classList.add(`mob-menu__burger-dark`);
    document.querySelector('.search__btn-mobile').classList.add(`mob-search-theme-dark`);
    document.querySelector('.menu-open').classList.add(`mob-search-theme-dark`);

    changeThemeToggleMobile.setAttribute('checked','');
    changeThemeToggle.setAttribute('checked','');
}

/* if(localStorage.getItem('theme') === 'dark'){
  document.querySelector('.mob-switch__input').setAttribute('checked','');
} */
/* if(!document.querySelector('.mob-menu__container').classList.contains('is-open')){
    location.reload();
  } */