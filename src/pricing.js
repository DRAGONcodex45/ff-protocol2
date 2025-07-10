//KOL PAGE H1 ANIMATION //

const h1 = document.getElementById('animated-title');
    const words = h1.textContent.trim().split(' ');
    h1.textContent = '';

    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word;
      span.className = 'word';
      h1.appendChild(span);
      h1.appendChild(document.createTextNode(' '));

      setTimeout(() => {
        span.classList.add('visible');
      }, index * 180); // Delay between each word
    });



//RESPONSIVE CAROUSEL SLIDER
let currentIndex = 0;
const slides = document.getElementById('slideContainer');
const totalSlides = slides.children.length;

function showSlide(index) {
  currentIndex = index % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
  showSlide(currentIndex + 1);
}, 3000);


//FAQ SECTION
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".icon");

    question.addEventListener("click", () => {
      // Close other open FAQs before opening the clicked one
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".icon").textContent = "+";
        }
      });

      // Toggle the active class on the clicked item
      item.classList.toggle("active");

      // Change icon based on active state
      icon.textContent = item.classList.contains("active") ? "-" : "+";
    });
  });
});