// Blog filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const blogItems = document.querySelectorAll('.blog-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active', 'bg-black', 'text-white'));
    button.classList.add('active', 'bg-black', 'text-white');
    
    const filter = button.getAttribute('data-filter');
    
    // Filter blog posts
    blogItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
        // Add a slight delay for a staggered animation effect
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 50 * Array.from(blogItems).indexOf(item));
      } else {
        item.style.display = 'none';
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
      }
    });
  });
});

// Initialize blog items with animation
blogItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  
  // Stagger the animations
  setTimeout(() => {
    item.style.opacity = '1';
    item.style.transform = 'translateY(0)';
  }, 100 * index);
});