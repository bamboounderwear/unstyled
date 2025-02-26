// Add smooth scroll behavior for table of contents links
document.querySelectorAll('aside a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      history.pushState(null, null, targetId);
    }
  });
});

// Highlight active section in table of contents
const sections = document.querySelectorAll('section[id]');
const tocLinks = document.querySelectorAll('aside a[href^="#"]');

const observerOptions = {
  rootMargin: '-100px 0px -70% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove active class from all links
      tocLinks.forEach(link => {
        link.classList.remove('text-red-600');
        link.classList.add('text-gray-600');
      });
      
      // Add active class to current section link
      const activeLink = document.querySelector(`aside a[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.remove('text-gray-600');
        activeLink.classList.add('text-red-600');
      }
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

// Add animation to images on scroll
const articleImages = document.querySelectorAll('.prose img');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

articleImages.forEach(image => {
  image.style.opacity = '0';
  image.style.transform = 'translateY(20px)';
  image.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  imageObserver.observe(image);
});

// Share buttons functionality
document.querySelectorAll('.mt-12 .flex.space-x-4 a').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    
    const platform = button.querySelector('.sr-only').textContent;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'Twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'LinkedIn':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'Facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  });
});