// NavMenu Toggle (mobile)
const navToggle = document.getElementById('nav-toggle');
const linksContainer = document.getElementById('nav-links-container');
const links = document.getElementById('links');

navToggle.addEventListener('click', () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0;
  }
});

// Fixed Nav & Top Link
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  scrollHeight > navHeight ? navbar.classList.add('fixed-nav') : navbar.classList.remove('fixed-nav');

  scrollHeight > 400 ? topLink.classList.add('show-link') :
  topLink.classList.remove('show-link');
});

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach( link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;
    
    if(!fixedNav) {
      position = position - navHeight;
    }

    if(navHeight > 104) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0, top: position,
    });
    linksContainer.style.height = 0;
    
  });
});

// Date
const date = document.getElementById('date');
date.innerText = new Date().getFullYear();