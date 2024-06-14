import './style.css';
import home from './home';

function showHide () {
  const home = document.querySelector('.home');
  const about = document.querySelector('.about');
  const menu = document.querySelector('.menu');
  const homePage = document.querySelector('.home-page');

  home.addEventListener('click', () => {
    homePage.classList.remove('hide');
    homePage.classList.add('show');
  })

  menu.addEventListener('click', () => {
    homePage.classList.add('hide');
  })

  about.addEventListener('click', () => {
    homePage.classList.add('hide');
  })
}

home();
showHide();