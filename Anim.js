document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Hanya muncul sekali
      }
    });
  }, {
    threshold: 0.1 // mulai muncul saat 10% masuk ke viewport
  });

  // Elemen yang ingin dianimasikan saat scroll
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});