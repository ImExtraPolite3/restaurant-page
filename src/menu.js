import espresso from './images/espresso.jpeg';
import cappuccino from './images/cappuccino.jpeg';
import bruchetta from './images/bruschetta-al-pomodoro.jpeg';
import calamari from './images/calamari-fritti.jpeg';
import pollo from './images/pollo-marsala.jpeg';
import pizza from './images/margherita-pizza.jpeg';
import branzino from './images/branzino-al-forno.jpeg';

export default function menu() {
  const content = document.getElementById('content'); //Call content from html
  //create div to hold all menu information
  const menuPage = document.createElement('div');
  menuPage.classList.add('main-page');
  //menu title
  const menuTitle = document.createElement('h1');
  //beverage section
  const beverage = document.createElement('h2');
  //first drink
  const drinkOne = document.createElement('div');
  const drinkOneName = document.createElement('h3');
  const drinkOneDescription = document.createElement('p');
  const drinkOneImg = new Image(300, 200);
  //second drink
  const drinkTwo = document.createElement('div');
  const drinkTwoName = document.createElement('h3');
  const drinkTwoDescription = document.createElement('p');
  const drinkTwoImg = new Image(300, 200);
  //appetizer section
  const appetizer = document.createElement('h2');
  //first appetizer
  const appetizerOne = document.createElement('div');
  const appetizerOneName = document.createElement('h3');
  const appetizerOneDescription = document.createElement('p');
  const appetizerOneImg = new Image(300, 200);
  //second appetizer
  const appetizerTwo = document.createElement('div');
  const appetizerTwoName = document.createElement('h3');
  const appetizerTwoDescription = document.createElement('p');
  const appetizerTwoImg = new Image(300, 200);
  //main section
  const main = document.createElement('h2');
  //first main
  const mainOne = document.createElement('div');
  const mainOneName = document.createElement('h3');
  const mainOneDescription = document.createElement('p');
  const mainOneImg = new Image(300, 200);
  //second main
  const mainTwo = document.createElement('div');
  const mainTwoName = document.createElement('h3');
  const mainTwoDescription = document.createElement('p');
  const mainTwoImg = new Image(300, 200);
  //third main
  const mainThree = document.createElement('div');
  const mainThreeName = document.createElement('h3');
  const mainThreeDescription = document.createElement('p');
  const mainThreeImg = new Image(300, 200);

  //add titles
  menuTitle.textContent = 'Menu';
  beverage.textContent = 'Beverages';
  appetizer.textContent = 'Appetizers';
  main.textContent = 'Mains';

  //drink one
  drinkOneName.textContent = 'Espresso';
  drinkOneDescription.textContent = 'Rich and intense Italian coffee.';
  drinkOneImg.src = espresso;

  //drink two
  drinkTwoName.textContent = 'Cappuccino';
  drinkTwoDescription.textContent = 'Espresso with steamed milk and a layer of froth.';
  drinkTwoImg.src = cappuccino;

  //appitizer one
  appetizerOneName.textContent = 'Bruschetta al Pomodoro';
  appetizerOneDescription.textContent = 'Toasted bread topped with fresh tomatoes, basil, garlic, and a drizzle of extra virgin olive oil.';
  appetizerOneImg.src = bruchetta;

  //appetizer two
  appetizerTwoName.textContent = 'Calamari Fritti';
  appetizerTwoDescription.textContent = 'Lightly breaded and fried calamari served with marinara sauce and lemon aioli.';
  appetizerTwoImg.src = calamari;

  //main one
  mainOneName.textContent = 'Pollo Marsala';
  mainOneDescription.textContent = 'Pan-seared chicken breast in a Marsala wine and mushroom sauce, served with roasted potatoes.';
  mainOneImg.src = pollo;

  //main two
  mainTwoName.textContent = 'Margherita Pizza';
  mainTwoDescription.textContent = 'Classic pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil.';
  mainTwoImg.src = pizza;

  //main three
  mainThreeName.textContent = 'Branzino al Forno';
  mainThreeDescription.textContent = 'Whole roasted Mediterranean sea bass with lemon, herbs, and olive oil, served with sautéed spinach..';
  mainThreeImg.src = branzino;

  //append all element
  content.appendChild(menuPage);
  menuPage.appendChild(menuTitle);
  menuPage.appendChild(beverage);
  menuPage.appendChild(drinkOne);
  drinkOne.appendChild(drinkOneName);
  drinkOne.appendChild(drinkOneDescription);
  drinkOne.appendChild(drinkOneImg);
  menuPage.appendChild(drinkTwo);
  drinkTwo.appendChild(drinkTwoName);
  drinkTwo.appendChild(drinkTwoDescription);
  drinkTwo.appendChild(drinkTwoImg);
  menuPage.appendChild(appetizer);
  menuPage.appendChild(appetizerOne);
  appetizerOne.appendChild(appetizerOneName);
  appetizerOne.appendChild(appetizerOneDescription);
  appetizerOne.appendChild(appetizerOneImg);
  menuPage.appendChild(appetizerTwo);
  appetizerTwo.appendChild(appetizerTwoName);
  appetizerTwo.appendChild(appetizerTwoDescription);
  appetizerTwo.appendChild(appetizerTwoImg);
  menuPage.appendChild(mainOne);
  mainOne.appendChild(mainOneName);
  mainOne.appendChild(mainOneDescription);
  mainOne.appendChild(mainOneImg);
  menuPage.appendChild(mainTwo);
  mainTwo.appendChild(mainTwoName);
  mainTwo.appendChild(mainTwoDescription);
  mainTwo.appendChild(mainTwoImg);
  menuPage.appendChild(mainThree);
  mainThree.appendChild(mainThreeName);
  mainThree.appendChild(mainThreeDescription);
  mainThree.appendChild(mainThreeImg);
}