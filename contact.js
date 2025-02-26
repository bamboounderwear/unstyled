// Form validation and submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Reset form
      contactForm.reset();
      
      // Show success message
      const formContainer = contactForm.parentElement;
      const successMessage = document.createElement('div');
      successMessage.className = 'bg-black text-white p-8 text-center';
      successMessage.innerHTML = `
        <h3 class="text-2xl font-bold mb-4">Message Sent</h3>
        <p class="mb-6">Thank you for contacting us. We'll get back to you shortly.</p>
        <button id="new-message" class="border border-white px-6 py-2 uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
          Send Another Message
        </button>
      `;
      
      formContainer.innerHTML = '';
      formContainer.appendChild(successMessage);
      
      // Add event listener to "Send Another Message" button
      document.getElementById('new-message').addEventListener('click', () => {
        formContainer.innerHTML = '';
        formContainer.appendChild(contactForm);
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      });
    }, 1500);
  });
}

// Custom select styling
const selectElement = document.getElementById('project-type');
if (selectElement) {
  // Add custom arrow
  const selectWrapper = document.createElement('div');
  selectWrapper.className = 'relative';
  selectElement.parentNode.insertBefore(selectWrapper, selectElement);
  selectWrapper.appendChild(selectElement);
  
  const arrow = document.createElement('div');
  arrow.className = 'absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none';
  arrow.innerHTML = `
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L6 6L11 1" stroke="black" stroke-width="2"/>
    </svg>
  `;
  selectWrapper.appendChild(arrow);
  
  // Style on focus
  selectElement.addEventListener('focus', () => {
    selectElement.parentNode.classList.add('ring-1', 'ring-black');
  });
  
  selectElement.addEventListener('blur', () => {
    selectElement.parentNode.classList.remove('ring-1', 'ring-black');
  });
}

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