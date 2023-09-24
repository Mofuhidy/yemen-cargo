const button = document.querySelector('.menuIcon');
const buttonCancel = document.querySelector('.cancelIcon');
const navMenu = document.querySelector('.navInfoMobile, .cancelIcon');
const nav = document.querySelector('.menuIcon, .logo');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('.mobileLinks');
const mobileEn = document.querySelector('.enlanMob');
const mobileAr = document.querySelector('.arlanMob');

// menu mobile function
button.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  button.classList.toggle('d-none');
  buttonCancel.classList.toggle('active');
  body.classList.toggle('active');
  mobileEn.classList.toggle('d-none');
  mobileAr.classList.toggle('d-none');
});

buttonCancel.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  button.classList.remove('d-none');
  buttonCancel.classList.toggle('active');
  mobileEn.classList.remove('d-none');
  mobileAr.classList.remove('d-none');
  body.classList.toggle('active');
});

// links functionality
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    button.classList.toggle('d-none');
    buttonCancel.classList.toggle('active');
    body.classList.toggle('active');
  });
});