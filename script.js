let burgerToggle = document.querySelector('.burger__icon');
let header = document.querySelector('header');
let burgerNav = document.querySelector('.nav__burger');

burgerToggle.addEventListener('click', () => {
    burgerToggle.classList.contains('active') ? burgerToggle.classList.remove('active') : burgerToggle.classList.add('active')
    header.classList.contains('fixed') ? header.classList.remove('fixed') : header.classList.add('fixed')
    burgerNav.classList.contains('open') ? burgerNav.classList.remove('open') : burgerNav.classList.add('open')
})

new WOW().init();
