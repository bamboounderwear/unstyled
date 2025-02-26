// Project filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active', 'bg-black', 'text-white'));
    button.classList.add('active', 'bg-black', 'text-white');
    
    const filter = button.getAttribute('data-filter');
    
    // Filter projects
    projectItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
        // Add a slight delay for a staggered animation effect
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 50 * Array.from(projectItems).indexOf(item));
      } else {
        item.style.display = 'none';
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
      }
    });
  });
});

// Initialize projects with animation
projectItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  
  // Stagger the animations
  setTimeout(() => {
    item.style.opacity = '1';
    item.style.transform = 'translateY(0)';
  }, 100 * index);
});

// Add hover effect to project images
const projectImages = document.querySelectorAll('.project-image');
projectImages.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.05)';
    image.style.transition = 'transform 0.5s ease';
  });
  
  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
});