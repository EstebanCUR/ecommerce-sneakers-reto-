(function(){
    const openButton = document.querySelector('.nav__menu');
    const closeMenu = document.querySelector('.nav__close');
    const menu = document.querySelector('.nav__menu-bg')

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__menu-bg--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__menu-bg--show');
    });

})();