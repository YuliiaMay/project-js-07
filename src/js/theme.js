let changeThemeToggle = document.querySelector('.switch__input')

changeThemeToggle.addEventListener('click', function () {
    let theme = this.dataset.theme;
    if(theme === 'dark' || theme === null){
    document.getElementById('sw1').classList.remove(`switch-${theme}`);
    document.getElementById('sw2').classList.remove(`switch__slider-${theme}`);
    document.body.classList.remove(`body__bg-${theme}`);
    document.querySelector('.header-container').classList.remove(`font__theme-${theme}`);     
        theme = 'light'
    document.getElementById('sw1').classList.add(`switch-${theme}`);
    document.getElementById('sw2').classList.add(`switch__slider-${theme}`);
    document.body.classList.add(`body__bg-${theme}`);
    document.querySelector('.header-container').classList.add(`font__theme-${theme}`);    
    } else if (theme === 'light') {
    document.getElementById('sw1').classList.remove(`switch-${theme}`);
    document.getElementById('sw2').classList.remove(`switch__slider-${theme}`);
    document.body.classList.remove(`body__bg-${theme}`);
    document.querySelector('.header-container').classList.remove(`font__theme-${theme}`); 
        theme = 'dark'
    document.getElementById('sw1').classList.add(`switch-${theme}`);
    document.getElementById('sw2').classList.add(`switch__slider-${theme}`);
    document.body.classList.add(`body__bg-${theme}`);
    document.querySelector('.header-container').classList.add(`font__theme-${theme}`); 
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
    document.getElementById('sw1').classList.add(`switch-light`);
    document.getElementById('sw2').classList.add(`switch__slider-light`);
    document.body.classList.add(`body__bg-light`);
    document.querySelector('.header-container').classList.add(`font__theme-light`);
} else if (activeTheme === 'dark') {
    changeTheme('dark');
    document.getElementById('sw1').classList.add(`switch-dark`);
    document.getElementById('sw2').classList.add(`switch__slider-dark`);
    document.body.classList.add(`body__bg-dark`);
    document.querySelector('.header-container').classList.add(`font__theme-dark`);

    changeThemeToggle.setAttribute('checked','');
}
console.log('123');