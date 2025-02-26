// Add animation to sections on scroll
const sections = document.querySelectorAll('section');
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

sections.forEach((section, index) => {
  // Add a slight delay based on section index for a staggered effect
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(section);
});

// Add hover effect to images
const projectImages = document.querySelectorAll('img');
projectImages.forEach(image => {
  if (!image.closest('.project-image')) { // Only apply to images not already in project-image containers
    image.addEventListener('mouseenter', () => {
      image.style.transform = 'scale(1.02)';
      image.style.transition = 'transform 0.5s ease';
    });
    
    image.addEventListener('mouseleave', () => {
      image.style.transform = 'scale(1)';
    });
  }
});

// Add smooth transition for "Back to Work" link
const backLink = document.querySelector('a[href="work.html"]');
if (backLink) {
  backLink.addEventListener('mouseenter', () => {
    backLink.style.paddingLeft = '8px';
  });
  
  backLink.addEventListener('mouseleave', () => {
    backLink.style.paddingLeft = '0';
  });
}