// ===== HEADER SCROLL HIDE =====
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // scroll down → hide header
    header.style.top = '-120px';
  } else {
    // scroll up → show header
    header.style.top = '0';
  }

  lastScroll = currentScroll;
});

const selectedLang = document.getElementById("selected-lang");
const langOptions = document.getElementById("lang-options");

// Toggle dropdown on click
selectedLang.addEventListener("click", () => {
  langOptions.style.display = langOptions.style.display === "block" ? "none" : "block";
});

// Change language on flag click
document.querySelectorAll(".flag-option").forEach(flag => {
  flag.addEventListener("click", () => {
    selectedLang.querySelector("img").src = flag.src; // Change main flag
    langOptions.style.display = "none"; // Close dropdown

    const lang = flag.getAttribute("data-lang");

    // Update all text elements with data attributes
    document.querySelectorAll("[data-en]").forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });
  });
});

// Close dropdown if click outside
document.addEventListener("click", function(event){
  if(!document.querySelector(".lang-selector").contains(event.target)){
    langOptions.style.display = "none";
  }
});