// Add smooth scrolling and animations when the sections come into view
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    } else {
      entry.target.classList.remove("fade-in");
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
