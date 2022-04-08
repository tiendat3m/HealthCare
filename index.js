let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header__navbar-link')


menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}