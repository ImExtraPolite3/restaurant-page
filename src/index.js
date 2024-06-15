import './style.css';
import home from './home';
import menu from './menu';

function showHide () {
  const home = document.querySelector('.home');
  const about = document.querySelector('.about');
  const menu = document.querySelector('.menu');
  const homePage = document.querySelector('.home-page');
  const menuPage = document.querySelector('.menu-page');

  home.addEventListener('click', () => {
    homePage.classList.remove('hide');
    menuPage.classList.add('hide');
    homePage.classList.add('show');
  })

  menu.addEventListener('click', () => {
    menuPage.classList.remove('hide');
    homePage.classList.add('hide');
    menuPage.classList.add('show');
  })

  about.addEventListener('click', () => {
    homePage.classList.add('hide');
    menuPage.classList.add('hide');
  })
}

home();
menu();
showHide();