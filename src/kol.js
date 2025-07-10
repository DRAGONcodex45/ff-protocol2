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


    // FAQ SECTION

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


//SCROLL TRIGGER REVEAL 

function revealGroupedBoxes(selector, delayStep = 200) {
  const boxes = document.querySelectorAll(selector);
  let scrollPosition = window.innerHeight;

  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < scrollPosition - 50 && !box.classList.contains('visible')) {
      setTimeout(() => {
        box.classList.add('visible');
      }, index * delayStep);
    }
  });
}

function revealOnScroll() {
  revealGroupedBoxes('.kol-page-service-box');
  revealGroupedBoxes('.kol-marketing-benefit-box');
  revealGroupedBoxes('.kol-choose-box');
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);