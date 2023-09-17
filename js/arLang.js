import translations from './translations.js';


const languageSelector = document.querySelector(".lang");
const languageSelectors = document.getElementById("langMob");

languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

languageSelectors.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});



document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.querySelector(".lang");
  const event = new Event("change", { bubbles: true });
  languageSelector.dispatchEvent(event);
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
};