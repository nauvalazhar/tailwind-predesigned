new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3
}).mount()

const navbar = document.querySelector('#main-navbar');
const navbarToggler = document.querySelectorAll('.navbar-toggler');
const navbarClose = document.querySelectorAll('.navbar-close');

function openNavbar(navbar) {
    navbar.style.right = 0;
}

function closeNavbar(navbar) {
    const navbarWidth = navbar.clientWidth;

    navbar.style.right = -navbarWidth + 'px';
}

navbarToggler.forEach(toggler => toggler.addEventListener('click', openNavbar.bind(this, navbar)));
navbarClose.forEach(close => close.addEventListener('click', closeNavbar.bind(this, navbar)));

