const button = document.querySelector('.menuIcon');
const buttonCancel = document.querySelector('.cancelIcon');
const navMenu = document.querySelector('.navInfoMobile, .cancelIcon');
const nav = document.querySelector('.menuIcon, .logo');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('.mobileLinks');

// menu mobile function
button.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  button.classList.toggle('d-none');
  buttonCancel.classList.toggle('active');
  body.classList.toggle('active');
});

buttonCancel.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  button.classList.remove('d-none');
  buttonCancel.classList.toggle('active');
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


const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    fetch('./sendEmail.php', {
        method: 'POST',
        body: new FormData(form),
    })
    .then(response => response.json())
    .then(data => {
     let error = document.querySelector('.error');
        if (data.success) {
            // Show the success message to the user
            error.innerHTML = data.message
            error.classList.add = 'text-success'
        } else {
            // Show an error message to the user
           error.innerHTML = data.message
          error.classList.add = 'text-danger'
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});