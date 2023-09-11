import translations from './translations.js';

function changeLanguage(language) {
  
  var elementsToTranslate = document.querySelectorAll('[data-translate]');
  elementsToTranslate.forEach(function (element) {
    var key = element.getAttribute('data-translate');
      element.innerHTML = translations[language][key];
      element.setAttribute('placeholder', translations[language][key]);
  });
  document.dir = language === 'en' ? 'ltr' : 'rtl';
}



const languageSelector = document.getElementById("lang");
languageSelector.addEventListener("change", (event) => {
  console.log("hie");
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  var elementsToTranslate = document.querySelectorAll('[data-translate]');
  elementsToTranslate.forEach(function (element) {
    var key = element.getAttribute('data-translate');
      element.innerHTML = translations[language][key];
      element.setAttribute('placeholder', translations[language][key]);
  });
  document.dir = language === 'en' ? 'ltr' : 'rtl';
};