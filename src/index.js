import './style.css';
import home from './home';
import menu from './menu';
import about from './about';

function showHide () {
  const home = document.querySelector('.home');
  const about = document.querySelector('.about');
  const menu = document.querySelector('.menu');
  const homePage = document.querySelector('.home-page');
  const menuPage = document.querySelector('.menu-page');
  const aboutPage = document.querySelector('.about-page');

  home.addEventListener('click', () => {
    homePage.classList.remove('hide');
    menuPage.classList.add('hide');
    homePage.classList.add('show');
    aboutPage.classList.add('hide');
  })

  menu.addEventListener('click', () => {
    menuPage.classList.remove('hide');
    homePage.classList.add('hide');
    menuPage.classList.add('show');
    aboutPage.classList.add('hide');
  })

  about.addEventListener('click', () => {
    aboutPage.classList.remove('hide');
    aboutPage.classList.add('show');
    homePage.classList.add('hide');
    menuPage.classList.add('hide');
  })
}

home();
menu();
about();
showHide();