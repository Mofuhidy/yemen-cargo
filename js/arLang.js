import translations from './translations.js';


const languageSelector = document.querySelector(".enlan");
const languageSelectors = document.querySelector(".arlan");
const mobileEnMob = document.querySelector('.enlanMob');
const mobileArMob = document.querySelector('.arlanMob');

document.addEventListener("DOMContentLoaded", () => {
  setLanguage('en');
});


languageSelector.addEventListener("click", (event) => {
  setLanguage(event.target.value);
});

languageSelectors.addEventListener("click", (event) => {
  setLanguage(event.target.value);
});

mobileEnMob.addEventListener("click", (event) => {
  setLanguage(event.target.value);
});
mobileArMob.addEventListener("click", (event) => {
  setLanguage(event.target.value);
});



const setLanguage = (language) => {
  var elementsToTranslate = document.querySelectorAll('[data-translate]');
  elementsToTranslate.forEach(function (element) {
    var key = element.getAttribute('data-translate');
      element.innerHTML = translations[language][key];
      element.setAttribute('placeholder', translations[language][key]);
  });

  var selectElement = document.querySelector('.select'); 
  
   Array.from(selectElement.options).forEach(function (option) {
      var key = option.getAttribute('data-translate');
      if (key) {
        option.text = translations[language][key];
      }
    });
  

  document.dir = language === 'en' ? 'ltr' : 'rtl';
  document.lang = language === 'en' ? 'en' : 'ar';

  const enSelect =  document.querySelectorAll('.en-select')
  const arSelect = document.querySelectorAll('.ar-select')



  if (language === 'en') {
    enSelect.forEach(element => {
      element.classList.remove('d-none');
    });
    arSelect.forEach(element => {
      element.classList.add('d-none');
    });
  } else {
    enSelect.forEach(element => {
      element.classList.add('d-none');
    });
    arSelect.forEach(element => {
      element.classList.remove('d-none');
    });
  }

};