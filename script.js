// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Header background on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    header.style.background = "#000";
    header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
  } else {
    header.style.background = "#111";
    header.style.boxShadow = "none";
  }
});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Gallery image click effect
document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", function() {
    window.open(this.src, "_blank");
  });
});
