let changeThemeToggle = document.querySelector('.switch__input')

changeThemeToggle.addEventListener('click', function () {
    let theme = this.dataset.theme;
    if(theme === 'dark' || theme === null){
    document.getElementById('swith_label').classList.remove(`switch-${theme}`);
    document.getElementById('switch_slider').classList.remove(`switch__slider-${theme}`);
    document.body.classList.remove(`body__bg-${theme}`);
    document.querySelector('.header-container').classList.remove(`font__theme-${theme}`);
    document.getElementById('span-light').classList.remove(`theme-switch__light-on-${theme}`);
    document.getElementById('span-dark').classList.remove(`theme-switch__dark-on-${theme}`);
    document.querySelector('.search__input').classList.remove(`search__input-theme-${theme}`);
    document.querySelector('.search__btn').classList.remove(`search__btn-${theme}`);      
        theme = 'light'
    document.getElementById('swith_label').classList.add(`switch-${theme}`);
    document.getElementById('switch_slider').classList.add(`switch__slider-${theme}`);
    document.body.classList.add(`body__bg-${theme}`);
    document.querySelector('.header-container').classList.add(`font__theme-${theme}`);
    document.getElementById('span-light').classList.add(`theme-switch__light-on-${theme}`);
    document.getElementById('span-dark').classList.add(`theme-switch__dark-on-${theme}`);
    document.querySelector('.search__input').classList.add(`search__input-theme-${theme}`);
    document.querySelector('.search__btn').classList.add(`search__btn-${theme}`);    
    } else if (theme === 'light') {
    document.getElementById('swith_label').classList.remove(`switch-${theme}`);
    document.getElementById('switch_slider').classList.remove(`switch__slider-${theme}`);
    document.body.classList.remove(`body__bg-${theme}`);
    document.querySelector('.header-container').classList.remove(`font__theme-${theme}`);
    document.getElementById('span-light').classList.remove(`theme-switch__light-on-${theme}`);
    document.getElementById('span-dark').classList.remove(`theme-switch__dark-on-${theme}`);
    document.querySelector('.search__input').classList.remove(`search__input-theme-${theme}`);
    document.querySelector('.search__btn').classList.remove(`search__btn-${theme}`); 
        theme = 'dark'
    document.getElementById('swith_label').classList.add(`switch-${theme}`);
    document.getElementById('switch_slider').classList.add(`switch__slider-${theme}`);
    document.body.classList.add(`body__bg-${theme}`);
    document.querySelector('.header-container').classList.add(`font__theme-${theme}`);
    document.getElementById('span-light').classList.add(`theme-switch__light-on-${theme}`);
    document.getElementById('span-dark').classList.add(`theme-switch__dark-on-${theme}`);
    document.querySelector('.search__input').classList.add(`search__input-theme-${theme}`);
    document.querySelector('.search__btn').classList.add(`search__btn-${theme}`); 
    } 
    changeTheme(theme);  

})

function changeTheme(themeName) {
    console.log(themeName);


    changeThemeToggle.setAttribute('data-theme', `${themeName}`)
    
    localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme')

if(activeTheme === null || activeTheme === 'light') {
    changeTheme('light');
    document.getElementById('swith_label').classList.add(`switch-light`);
    document.getElementById('switch_slider').classList.add(`switch__slider-light`);
    document.body.classList.add(`body__bg-light`);
    document.querySelector('.header-container').classList.add(`font__theme-light`);
    document.getElementById('span-light').classList.add(`theme-switch__light-on-light`);
    document.getElementById('span-dark').classList.add(`theme-switch__dark-on-light`);
    document.querySelector('.search__input').classList.add(`search__input-theme-light`);
    document.querySelector('.search__btn').classList.add(`search__btn-light`); 
    
} else if (activeTheme === 'dark') {
    changeTheme('dark');
    document.getElementById('swith_label').classList.add(`switch-dark`);
    document.getElementById('switch_slider').classList.add(`switch__slider-dark`);
    document.body.classList.add(`body__bg-dark`);
    document.querySelector('.header-container').classList.add(`font__theme-dark`);
    document.getElementById('span-light').classList.add(`theme-switch__light-on-dark`);
    document.getElementById('span-dark').classList.add(`theme-switch__dark-on-dark`);
    document.querySelector('.search__input').classList.add(`search__input-theme-dark`);
    document.querySelector('.search__btn').classList.add(`search__btn-dark`); 

    changeThemeToggle.setAttribute('checked','');
}
console.log('123');