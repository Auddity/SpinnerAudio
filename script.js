// NavMenu Toggle (mobile)
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

// Back to top Link
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
const navHeight = navbar.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;

  scrollHeight > navHeight ? navbar.classList.add('fixed-nav') : navbar.classList.remove('fixed-nav');

  scrollHeight > 500 ? topLink.classList.add('show-link') :
  topLink.classList.remove('show-link');
});

// adjust scroll for nav height
const linkItem = document.querySelectorAll('.scroll-link');
linkItem.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    
    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;
    if(!fixedNav) position = position + navHeight;
    if(navHeight > 103) position = position + containerHeight;
    window.scrollTo(
      { left: 0, top: position }
    )

    linksContainer.style.height = 0;
      
    // Show current section highlight in navbar
    linkItem.forEach(link => {
      if(link.classList.contains('current')) link.classList.remove('current');
    });
    e.currentTarget.classList.add('current');  

    topLink.addEventListener('click', () => {
      window.scrollTo(
        { left: 0, top: position }
      )
    });
  });
});

// Date
const date = document.getElementById('date');
const currentYear = new Date().getFullYear();
date.innerText = currentYear;