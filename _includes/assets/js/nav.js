var siteNavOpenBtn = document.querySelector('.site-nav-toggle-btn--open');
var siteNavCloseBtn = document.querySelector('.site-nav-toggle-btn--close');
var siteNav = document.querySelector('.site-nav');

siteNavOpenBtn.addEventListener('click', function () {
  siteNav.classList.add('open');
}, false);

siteNavCloseBtn.addEventListener('click', function () {
  siteNav.classList.remove('open');
}, false);