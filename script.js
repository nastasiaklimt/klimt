// script.js
document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in-on-scroll');
  
    const appearOptions = {
      threshold: 0.1
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
  