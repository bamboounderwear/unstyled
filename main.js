// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add hover effect to grid items
const gridItems = document.querySelectorAll('.aspect-square');
gridItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
    item.style.transition = 'transform 0.3s ease';
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});

// Mobile menu functionality is now handled by the shared script in mobile-menu-script.hbs