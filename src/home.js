export default function home() {
  const content = document.getElementById('content');
  const createHome =  document.createElement('div');
  const title = document.createElement('h1');
  const paraOne = document.createElement('p');
  const paraTwo = document.createElement('p');
  const paraThree = document.createElement('p');
  const paraFour = document.createElement('p');
  const hoursTitle = document.createElement('h2');
  const hoursList = document.createElement('ul');
  const hoursListOne = document.createElement('li');
  const hoursListTwo = document.createElement('li');
  const hoursListThree = document.createElement('li');
  const hoursListFour = document.createElement('li');
  const hoursListFive = document.createElement('li');
  const hoursListSix = document.createElement('li');
  const hoursListSeven = document.createElement('li');
  const locationTitle = document.createElement('h2');
  const location = document.createElement('p');

  createHome.classList.add('home-page');

  title.textContent = 'La Bella Cucina';
  paraOne.textContent = 'Step into La Bella Cucina, a culinary haven where traditional flavors meet modern sophistication. Nestled in the heart of downtown, our restaurant offers an inviting ambiance that blends rustic charm with contemporary elegance, making it the perfect setting for any occasion.';
  paraTwo.textContent = 'At La Bella Cucina, we pride ourselves on crafting a dining experience that tantalizes all your senses. Our menu, inspired by the rich culinary heritage of Italy, features a diverse selection of dishes prepared with the freshest, locally-sourced ingredients. From our handmade pastas and wood-fired pizzas to our succulent seafood and mouthwatering meat dishes, each plate is a testament to our passion for authentic, high-quality cuisine.';
  paraThree.textContent = 'Complement your meal with a selection from our extensive wine list, showcasing the finest vintages from Italy and around the world. Our knowledgeable staff is always on hand to recommend the perfect pairing to enhance your dining experience.';
  paraFour.textContent = "Whether you're enjoying a romantic dinner for two, celebrating with family and friends, or hosting a special event, La Bella Cucina promises an unforgettable journey through the flavors of Italy. Join us and discover why we are a beloved destination for food lovers and connoisseurs alike.";
  hoursTitle.textContent = 'Hours';
  hoursListOne.textContent = 'Sunday: 8am - 8pm';
  hoursListTwo.textContent = 'Monday: 6am - 6pm';
  hoursListThree.textContent = 'Tuesday: 6am - 6pm';
  hoursListFour.textContent = 'Wednesday: 6am - 6pm';
  hoursListFive.textContent = 'Thursday: 6am - 10pm';
  hoursListSix.textContent = 'Friday: 6am - 10pm';
  hoursListSeven.textContent = 'Saturday: 8am - 10pm';
  locationTitle.textContent = 'Location';
  location.textContent = 'Suite 502 94930 Larkin Crossing, Stammmouth, LA 88152';

  content.appendChild(createHome);
  createHome.appendChild(title);
  createHome.appendChild(paraOne);
  createHome.appendChild(paraTwo);
  createHome.appendChild(paraThree);
  createHome.appendChild(paraFour);
  createHome.appendChild(hoursTitle);
  createHome.appendChild(hoursList);
  hoursList.appendChild(hoursListOne);
  hoursList.appendChild(hoursListTwo);
  hoursList.appendChild(hoursListThree);
  hoursList.appendChild(hoursListFour);
  hoursList.appendChild(hoursListFive);
  hoursList.appendChild(hoursListSix);
  hoursList.appendChild(hoursListSeven);
  createHome.appendChild(locationTitle);
  createHome.appendChild(location);
}