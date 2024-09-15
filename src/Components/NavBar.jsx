function NavBarButtons({ id_name, button_name, hide_content }) {
  return (
    <button onClick={hide_content} id={id_name}>
      {button_name}
    </button>
  );
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
      <NavBarButtons
        hide_content={showHome}
        id_name="home"
        button_name="Home"
      />
      <NavBarButtons
        hide_content={showMenu}
        id_name="menu"
        button_name="Menu"
      />
      <NavBarButtons
        hide_content={showAbout}
        id_name="about"
        button_name="About"
      />
    </div>
  );
}
