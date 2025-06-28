
  // ✅ Navbar toggle
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    document.body.classList.toggle('menu-active');
  });

  // ✅ Accordion toggle
  document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';

      // Close all
      document.querySelectorAll('.accordion-header').forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelector('.icon').textContent = '+';
        btn.nextElementSibling.style.display = 'none';
      });

      // Toggle current
      if (!expanded) {
        button.setAttribute('aria-expanded', 'true');
        button.querySelector('.icon').textContent = '×';
        button.nextElementSibling.style.display = 'block';
      }
    });
  });

  
  // ✅ Scroll Shadow for Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

// Get all FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

// Add event listeners to toggle answers
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    // Toggle answer visibility
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      question.querySelector('.plus').textContent = '+';
    } else {
      answer.style.display = 'block';
      question.querySelector('.plus').textContent = '−';
    }
  });
});
// Wait for the document to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
  // Get all FAQ question elements
  const faqQuestions = document.querySelectorAll('.faq-question');

  // Loop through each question and add a click event listener
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      // Get the corresponding answer to the clicked question
      const answer = this.nextElementSibling;

      // Toggle the display of the answer
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        this.querySelector('.plus').textContent = '+';
      } else {
        answer.style.display = 'block';
        this.querySelector('.plus').textContent = '−';
      }
    });
  });
});
