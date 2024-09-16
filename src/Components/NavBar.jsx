function NavBarButtons({ id_name, button_name, class_name, hide_content }) {
  return (
    <button onClick={hide_content} className={class_name} id={id_name}>
      {button_name}
    </button>
  );
}

function dropDownMenu() {
  const navBarButton = document.getElementById('nav-bar-buttons');

  navBarButton.checkVisibility() === false
    ? (navBarButton.style.display = 'block')
    : (navBarButton.style.display = 'none');
}

function showHome() {
  const allContent = document.querySelectorAll('.content');

  allContent.forEach((content) => {
    content.id === 'home-content'
      ? (content.style.display = 'block')
      : (content.style.display = 'none');
  });
}

function showMenu() {
  const allContent = document.querySelectorAll('.content');

  allContent.forEach((content) => {
    content.id === 'menu-content'
      ? (content.style.display = 'block')
      : (content.style.display = 'none');
  });
}

function showAbout() {
  const allContent = document.querySelectorAll('.content');

  allContent.forEach((content) => {
    content.id === 'about-content'
      ? (content.style.display = 'block')
      : (content.style.display = 'none');
  });
}

export default function NavBar() {
  return (
    <div id="nav-bar">
      <div className="nav-img">
        <img src="/menu.svg" alt="hamburger-menu" onClick={dropDownMenu} />
      </div>
      <h1>
        <img src="/food.svg" alt="food" /> La Bella Cucina
      </h1>
      <div id="nav-bar-buttons">
        <NavBarButtons
          hide_content={showHome}
          id_name="home"
          button_name="Home"
          class_name="change-button"
        />
        <NavBarButtons
          hide_content={showMenu}
          id_name="menu"
          button_name="Menu"
          class_name="change-button"
        />
        <NavBarButtons
          hide_content={showAbout}
          id_name="about"
          button_name="About"
          class_name="change-button"
        />
      </div>
      <div id="search-bar">
        <img src="/magnify.svg" alt="" />
        <input type="text" placeholder="Search for item" />
        <img src="/arrow-right.svg" alt="" />
      </div>
    </div>
  );
}
