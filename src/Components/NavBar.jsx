const MOBILE_WIDTH = 841;

function NavBarButtons({ id_name, button_name, class_name, hide_content }) {
  return (
    <button onClick={hide_content} className={class_name} id={id_name}>
      {button_name}
    </button>
  );
}

function dropDownMenu() {
  const navBarButton = document.getElementById('nav-bar-buttons');
  const allContent = document.querySelectorAll('.content');

  if (window.innerWidth < MOBILE_WIDTH) {
    if (navBarButton.checkVisibility() === false) {
      navBarButton.classList.remove('hide');
      allContent.forEach((content) => {
        content.style.display = 'none';
      });
    } else {
      navBarButton.classList.add('hide');
      allContent[0].style.display = 'block';
    }
  }
}

function displayParts(title) {
  const allContent = document.querySelectorAll('.content');
  const navBarButton = document.getElementById('nav-bar-buttons');

  if (window.innerWidth < MOBILE_WIDTH) {
    allContent.forEach((content) => {
      content.id === `${title}-content`
        ? ((content.style.display = 'block'),
          navBarButton.classList.add('hide'))
        : (content.style.display = 'none');
    });
  } else {
    allContent.forEach((content) => {
      content.id === `${title}-content`
        ? (content.style.display = 'block')
        : (content.style.display = 'none');
    });
  }
}

const navInfo = [
  { title: 'home', button_name: 'Home', key: crypto.randomUUID() },
  { title: 'menu', button_name: 'Menu', key: crypto.randomUUID() },
  { title: 'about', button_name: 'About', key: crypto.randomUUID() },
];

function DisplayNavButtons() {
  return navInfo.map((info) => (
    <NavBarButtons
      key={navInfo.key}
      hide_content={function () {
        displayParts(info.title);
      }}
      id_name={info.title}
      button_name={info.button_name}
      class_name="change-button"
    />
  ));
}

export default function NavBar() {
  return (
    <div id="nav-bar">
      <h1>
        <img src="/food.svg" alt="food" /> La Bella Cucina
      </h1>
      <div className="nav-img">
        <img src="/menu.svg" alt="hamburger-menu" onClick={dropDownMenu} />
      </div>
      <div id="nav-bar-buttons" className="hide">
        <DisplayNavButtons />
      </div>
      <div id="search-bar">
        <img src="/magnify.svg" alt="" />
        <input type="text" placeholder="Search for item" />
        <img src="/arrow-right.svg" alt="" />
      </div>
    </div>
  );
}
