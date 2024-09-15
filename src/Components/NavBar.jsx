function NavBarButtons({ id_name, button_name, hide_content }) {
  return (
    <button onClick={hide_content} id={id_name}>
      {button_name}
    </button>
  );
}

function showHome() {
  const allButtons = document.querySelectorAll('#nav-bar > button');

  allButtons.forEach((button) => {
    button.id === 'home'
      ? (button.style.display = 'block')
      : (button.style.display = 'none');
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
      <NavBarButtons id_name="menu" button_name="Menu" />
      <NavBarButtons id_name="about" button_name="About" />
    </div>
  );
}
