function ShowItem({ name, description, img_link }) {
  return (
    <div>
      <img src={img_link} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Menu() {
  return (
    <div id="menu-content" className="content">
      <h2>Beverages</h2>
      <div id="beverages">
        <ShowItem
          name="Espresso"
          description="Rich and intense Italian coffee."
          img_link="/espresso.jpeg"
        />
        <ShowItem
          name="Cappuccino"
          description="Espresso with steamed milk and a layer of froth."
          img_link="/cappuccino.jpeg"
        />
      </div>
      <h2>Appetizers</h2>
      <div id="appetizer">
        <ShowItem
          name="Bruschetta al Pomodoro"
          description="Toasted bread topped with fresh tomatoes, basil, garlic, and a drizzle of extra virgin olive oil."
          img_link="/bruschetta-al-pomodoro.jpg"
        />
        <ShowItem
          name="Calamari Fritti"
          description="Lightly breaded and fried calamari served with marinara sauce and lemon aioli."
          img_link="/calamari-fritti.jpeg"
        />
        <ShowItem
          name="Pollo Marsala"
          description="Pan-seared chicken breast in a Marsala wine and mushroom sauce, served with roasted potatoes."
          img_link="/pollo-marsala.jpeg"
        />
        <ShowItem
          name="Margherita Pizza"
          description="Classic pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil."
          img_link="/margherita-pizza.jpeg"
        />
        <ShowItem
          name="Branzino al Forno"
          description="Whole roasted Mediterranean sea bass with lemon, herbs, and olive oil, served with sautéed spinach."
          img_link="branzino-al-forno.jpeg"
        />
      </div>
    </div>
  );
}
