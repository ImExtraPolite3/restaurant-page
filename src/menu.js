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
drinkOneImg.src = './images/espresso.jpeg';

//drink two
drinkTwo.textContent = 'Cappuccino';
drinkTwoDescription.textContent = 'Espresso with steamed milk and a layer of froth.';
drinkTwoImg.src = './images/cappuccino.jpeg';

//appitizer one
appetizerOne.textContent = 'Bruschetta al Pomodoro';
appetizerOneDescription.textContent = 'Toasted bread topped with fresh tomatoes, basil, garlic, and a drizzle of extra virgin olive oil.';
appetizerOneImg.src = './images/bruschetta-al-pomodoro.jpeg';

//appetizer two
appetizerTwo.textContent = 'Calamari Fritti';
appetizerTwoDescription.textContent = 'Lightly breaded and fried calamari served with marinara sauce and lemon aioli.';
appetizerTwoImg.src = './images/calamari-fritti.jpeg';

//main one
mainOne.textContent = 'Pollo Marsala';
mainOneDescription.textContent = 'Pan-seared chicken breast in a Marsala wine and mushroom sauce, served with roasted potatoes.';
mainOneImg.src = './images/pollo-marsala.jpeg';

//main two
mainTwo.textContent = 'Margherita Pizza';
mainTwoDescription.textContent = 'Classic pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil.';
mainTwoImg.src = './images/margherita-pizza.jpeg';

//main three
mainThree.textContent = 'Branzino al Forno';
mainThreeDescription.textContent = 'Whole roasted Mediterranean sea bass with lemon, herbs, and olive oil, served with sautéed spinach..';
mainThreeImg.src = './images/branzino-al-forno.jpeg';