function descriptionText() {
  const text = [
    {
      textp:
        'Step into La Bella Cucina, a culinary haven where traditional flavors meet modern sophistication. Nestled in the heart of downtown, our restaurant offers an inviting ambiance that blends rustic charm with contemporary elegance, making it the perfect setting for any occasion.',
      textid: crypto.randomUUID(),
    },
    {
      textp:
        'At La Bella Cucina, we pride ourselves on crafting a dining experience that tantalizes all your senses. Our menu, inspired by the rich culinary heritage of Italy, features a diverse selection of dishes prepared with the freshest, locally-sourced ingredients. From our handmade pastas and wood-fired pizzas to our succulent seafood and mouthwatering meat dishes, each plate is a testament to our passion for authentic, high-quality cuisine.',
      textid: crypto.randomUUID(),
    },
  ];

  return text.map((eachText) => <p key={eachText.textid}>{eachText.textp}</p>);
}

function hours() {
  const getHours = [
    'Sunday: 8am - 8pm',
    'Monday: 6am - 6pm',
    'Tuesday: 6am - 6pm',
    'Wednesday: 6am - 6pm',
    'Thursday: 6am - 10pm',
    'Friday: 6am - 10pm',
    'Saturday: 8am - 10pm',
  ];

  return getHours.map((eachDay) => (
    <li key={getHours.indexOf(eachDay)}>{eachDay}</li>
  ));
}

export default function Home() {
  return (
    <div id="home-content" className="content">
      <div id="description">{descriptionText()}</div>
      <div id="hours">
        <h2>Hours</h2>
        <ul>{hours()}</ul>
      </div>
    </div>
  );
}
