document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for fade-ins
  const faders = document.querySelectorAll(".fade-in-on-scroll");
  const observerOptions = { threshold: 0.1 };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, observerOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
