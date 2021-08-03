const date = document.getElementById('date');
const currentYear = new Date().getFullYear();
date.innerText = currentYear;


const navToggle = document.getElementById('nav-toggle');
const linksContainer = document.getElementById('nav-links-container');
const links = document.getElementById('links')

navToggle.addEventListener('click', () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0;
  }
});

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  scrollHeight > navHeight ? navbar.classList.add('fixed-nav') : navbar.classList.remove('fixed-nav');

  scrollHeight > 500 ? topLink.classList.add('show-link') :
  topLink.classList.remove('show-link');
});