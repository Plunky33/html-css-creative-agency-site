const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.navigation');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  nav.classList.toggle('active');
});
