import loadPage from './modules/initial-page-load';

init();

function addNavEvents() {
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const contactBtn = document.getElementById('contact');

  homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
  contactBtn.addEventListener('click', loadContact);
}

function init() {
  loadPage();
  createHomeContent();
  addNavEvents();
}


