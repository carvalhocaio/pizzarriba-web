import { useEffect, useState } from "react";
import "./App.css";
import Dish from "./components/Dish";

function App() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setDishes(dados);
      });
  }, []);

  return (
    <div className="App">
      <div className="banner-container">
        <img src="/images/banner.png" alt="pizzarriba banner" />
      </div>
      <div className="logo-container">
        <img src="/images/logo.png" alt="pizzarriba logo" />
      </div>

      <section className="dishes">
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            name={dish.name}
            description={dish.description}
            image={dish.image}
            price={dish.price}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
