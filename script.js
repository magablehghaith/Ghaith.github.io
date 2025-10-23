const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}


const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    form.reset();
  });
}
