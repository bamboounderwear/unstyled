// Add animation to timeline items
const timelineItems = document.querySelectorAll('.border-l-2.border-black');
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateX(0)';
    }
  });
}, observerOptions);

timelineItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-20px)';
  item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(item);
});

// Add hover effect to team member images
const teamImages = document.querySelectorAll('.team-member .aspect-square');
teamImages.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.05)';
    image.style.transition = 'transform 0.3s ease';
  });
  
  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
});