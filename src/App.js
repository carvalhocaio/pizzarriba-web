import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
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
    </div>
  );
}

export default App;
