// mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navEl = document.querySelector('.nav');
if(hamburger){
  hamburger.addEventListener('click', () => {
    navEl.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
}

// set active link based on filename
(function setActiveLink(){
  const links = document.querySelectorAll('.nav a');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a=>{
    const href = a.getAttribute('href');
    if(href && href.includes(path)) a.classList.add('active');
  });
})();

// scroll reveal
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{ threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// basic contact form mock validation (no sending)
const form = document.querySelector('#contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const msg = form.querySelector('[name="message"]').value.trim();
    if(!name || !email || !msg){
      alert('Please fill all fields before sending.');
      return;
    }
    form.querySelector('button').textContent = 'Sent ✓';
    setTimeout(()=> form.querySelector('button').textContent = 'Send Message', 1800);
    form.reset();
  });
}
