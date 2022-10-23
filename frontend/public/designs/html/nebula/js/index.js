const navbar = document.querySelector('#main-navbar');
const navbarToggler = document.querySelectorAll('.navbar-toggler');
const navbarClose = document.querySelectorAll('.navbar-close');

function openNavbar(navbar) {
  navbar.classList.replace('-right-full', 'right-0');
}

function closeNavbar(navbar) {
  navbar.classList.replace('right-0', '-right-full');
}

navbarToggler.forEach(toggler => toggler.addEventListener('click', openNavbar.bind(this, navbar)));
navbarClose.forEach(close => close.addEventListener('click', closeNavbar.bind(this, navbar)));



