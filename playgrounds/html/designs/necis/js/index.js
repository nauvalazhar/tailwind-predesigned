const navbar = document.querySelector('#main-navbar');
const navbarToggler = document.querySelectorAll('.navbar-toggler');
const navbarClose = document.querySelectorAll('.navbar-close');
const previewToggle = document.querySelectorAll('.preview-toggle');
const previewImg = document.querySelector('#preview-img');

function openNavbar(navbar) {
  navbar.classList.replace('-right-full', 'right-0');
}

function closeNavbar(navbar) {
  navbar.classList.replace('right-0', '-right-full');
}

navbarToggler.forEach(toggler => toggler.addEventListener('click', openNavbar.bind(this, navbar)));
navbarClose.forEach(close => close.addEventListener('click', closeNavbar.bind(this, navbar)));

const activeClass = 'bg-blue-500 hover:bg-blue-500 shadow-xl rounded-xl text-white'.split(' ');
previewToggle[0].classList.add(...activeClass);

previewToggle.forEach(toggle => toggle.addEventListener('click', (e) => {
  const src = e.target.dataset.src;
  
  previewImg.setAttribute('src', src);


  previewToggle.forEach(t => t.classList.remove(...activeClass));
  toggle.classList.add(...activeClass);
}));

