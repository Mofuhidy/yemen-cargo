import translations from './translations.js';


const languageSelector = document.querySelector(".lang");
const languageSelectors = document.getElementById("langMob");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

languageSelectors.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; 
  const languageSelector = document.querySelector(".lang");

  // Loop through the options and set the selected option based on the stored language
  for (let option of languageSelector.options) {
    if (option.value === language) {
      option.selected = true;
      break; // Exit the loop once the selected option is found
    }
  }
  const event = new Event("change", { bubbles: true });
  languageSelector.dispatchEvent(event);
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
  document.lang = language === 'en' ? 'en' : 'ar';
};