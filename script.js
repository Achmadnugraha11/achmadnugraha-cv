// toggle class active untuk humberger menu
const navbarNav = document.querySelector('.navbar-nav')

document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
}

// klik diluar elemen
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
})
