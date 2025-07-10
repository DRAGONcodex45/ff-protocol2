//HAMBURGER MENU //

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
let open = false;

hamburger.addEventListener('click', () => {
  open = !open;
hamburger.textContent = open ? '✖' : '☰';
hamburger.style.transform = open ? 'rotate(90deg)' : 'rotate(0deg)';
mobileMenu.classList.toggle('active');
});



//COUNTER SECTION //

const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = +el.getAttribute('data-target');
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '+';
      let count = 0;
      const step = Math.ceil(target / 100);

      const update = () => {
        count += step;
        if (count >= target) {
          el.innerText = `${prefix}${target}${suffix}`;
          observer.unobserve(el);
        } else {
          el.innerText = `${prefix}${count}${suffix}`;
          requestAnimationFrame(update);
        }
      };
      update();
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => observer.observe(counter));


//ABOUT CONTENT SLIDE IN//

const fadeInObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}, { threshold: 0.1 });

const aboutContent = document.querySelector('.about-content');
fadeInObserver.observe(aboutContent);


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
  revealGroupedBoxes('.choose-box');
  revealGroupedBoxes('.benefit-box');
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);




