export default function about() {
  const content = document.getElementById('content'); //Call content from html
  //create div to hold all about information
  const aboutPage = document.createElement('div');
  aboutPage.classList.add('about-page');
  aboutPage.classList.add('hide');
  //about title
  const aboutTitle = document.createElement('h1');
  //contact div
  const contactName = document.createElement('h2');
  const contactNumber = document.createElement('p');
  const contactEmail = document.createElement('p');

  contactName.textContent = 'Something';
  contactNumber.textContent = '555-555-5555';
  contactEmail.textContent = 'somethin222g@gmail.com';

  content.appendChild(aboutPage);
  aboutPage.appendChild(contactName);
  aboutPage.appendChild(contactNumber);
  aboutPage.appendChild(contactEmail);
}