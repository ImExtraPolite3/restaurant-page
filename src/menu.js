//create div to hold all menu information
const menuPage = document.createElement('div');
//menu title
const menuTitle = document.createElement('h1');
//beverage section
const beverage = document.createElement('h2');
//first drink
const drinkOne = document.createElement('div');
const drinkOneName = document.createElement('h3');
const drinkOneDescription = document.createElement('p');
const drinkOneImg = new Image();
//second drink
const drinkTwo = document.createElement('div');
const drinkTwoName = document.createElement('h3');
const drinkTwoDescription = document.createElement('p');
const drinkTwoImg = new Image();
//appetizer section
const appetizer = document.createElement('h2');
//first appetizer
const appetizerOne = document.createElement('div');
const appetizerOneName = document.createElement('h3');
const appetizerOneDescription = document.createElement('p');
const appetizerOneImg = new Image();
//second appetizer
const appetizerTwo = document.createElement('div');
const appetizerTwoName = document.createElement('h3');
const appetizerTwoDescription = document.createElement('p');
const appetizerTwoImg = new Image();
//main section
const main = document.createElement('h2');
//first main
const mainOne = document.createElement('div');
const mainOneName = document.createElement('h3');
const mainOneDescription = document.createElement('p');
const mainOneImg = new Image();
//second main
const mainTwo = document.createElement('div');
const mainTwoName = document.createElement('h3');
const mainTwoDescription = document.createElement('p');
const mainTwoImg = new Image();
//third main
const mainThree = document.createElement('div');
const mainThreeName = document.createElement('h3');
const mainThreeDescription = document.createElement('p');
const mainThreeImg = new Image();

//add titles
menuTitle.textContent = 'Menu';
beverage.textContent = 'Beverages';
appetizer.textContent = 'Appetizers';
main.textContent = 'Mains';

//drink one
drinkOne.textContent = 'Espresso';
drinkOneDescription.textContent = 'Rich and intense Italian coffee.';
