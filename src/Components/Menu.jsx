const beverageItems = [
  {
    name: 'Espresso',
    key: '1',
    description: 'Rich and intense Italian coffee.',
    img_link: '/espresso.jpeg',
  },
  {
    name: 'Cappuccino',
    key: '2',
    description: 'Espresso with steamed milk and a layer of froth.',
    img_link: '/cappuccino.jpeg',
  },
];

const appetizerItems = [
  {
    name: 'Bruschetta al Pomodoro',
    key: '1',
    description:
      'Toasted bread topped with fresh tomatoes, basil, garlic, and a drizzle of extra virgin olive oil.',
    img_link: '/bruschetta-al-pomodoro.jpg',
  },
  {
    name: 'Calamari Fritti',
    key: '2',
    description:
      'Lightly breaded and fried calamari served with marinara sauce and lemon aioli.',
    img_link: '/calamari-fritti.jpeg',
  },
  {
    name: 'Pollo Marsala',
    key: '3',
    description:
      'Pan-seared chicken breast in a Marsala wine and mushroom sauce, served with roasted potatoes.',
    img_link: '/pollo-marsala.jpeg',
  },
  {
    name: 'Margherita Pizza',
    key: '4',
    description:
      'Classic pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil.',
    img_link: '/margherita-pizza.jpeg',
  },
  {
    name: 'Branzino al Forno',
    key: '5',
    description:
      'Whole roasted Mediterranean sea bass with lemon, herbs, and olive oil, served with sautéed spinach.',
    img_link: 'branzino-al-forno.jpeg',
  },
];

function ShowItem({ name, description, img_link }) {
  return (
    <div>
      <img src={img_link} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

function MenuCategory({ title, menuItems }) {
  return (
    <>
      <h2>{title}</h2>
      <div id={title.toLowerCase()}>
        {menuItems.map((items) => (
          <ShowItem
            key={items.key}
            name={items.name}
            description={items.description}
            img_link={items.img_link}
          />
        ))}
      </div>
    </>
  );
}

export default function Menu() {
  return (
    <div id="menu-content" className="content">
      <MenuCategory title="Beverages" menuItems={beverageItems} />
      <MenuCategory title="Appetizer" menuItems={appetizerItems} />
    </div>
  );
}
