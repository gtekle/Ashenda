const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const btnMenuOpen = document.querySelector('.btn-mobile-menu');
const btnMenuClose = document.querySelector('.btn-menu-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-list .nav-link');
const body = document.querySelector('body');

btnMenuOpen.addEventListener('click', (event) => {
  event.preventDefault();
  mobileNavMenu.style.display = 'flex';
  body.style.overflow = 'hidden';
});

btnMenuClose.addEventListener('click', (event) => {
  event.preventDefault();
  mobileNavMenu.style.display = 'none';
  body.style.overflow = '';
});

mobileNavLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    mobileNavMenu.style.display = 'none';
    body.style.overflow = '';
  });
});
