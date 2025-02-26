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

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  // Add smooth transition for menu button
  const bars = mobileMenuButton.children;
  if (mobileMenu.classList.contains('hidden')) {
    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';
  } else {
    bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  }
});

// Close mobile menu on window resize if screen becomes larger
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) { // md breakpoint
    mobileMenu.classList.add('hidden');
    const bars = mobileMenuButton.children;
    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';
  }
});