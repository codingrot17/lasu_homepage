window.addEventListener('scroll', function() {
    const header = document.querySelector('.second_menu');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const scrollUpButton = document.getElementById('scrollUpButton');

function handleScroll() {
  if (window.scrollY > 100) {
    scrollUpButton.classList.add('show');
  } else {
    scrollUpButton.classList.remove('show');
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
const button = document.querySelector('.menu_icon');
const closeButton = document.querySelector('.exist_icon');
const navBar = document.getElementById('secondII_nav_bar');

function menuButton() {
  navBar.style.display="flex";
  button.style.display="none"
}

function closeMenuButton() {
  navBar.style.display="none";
  button.style.display="flex";
}

scrollUpButton.addEventListener('click', scrollToTop);
window.addEventListener('scroll', handleScroll);

button.addEventListener('click', menuButton);
closeButton.addEventListener('click', closeMenuButton);