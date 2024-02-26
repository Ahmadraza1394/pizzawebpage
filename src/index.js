import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container ">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const styleTxt = {
  //   color: "red",
  //   fontSize: "45px",
  //   textTransform: "uppercase",
  // };
  return (
    <header className="header">
      <h1>Fast Pizza are available on Our Comapany</h1>
    </header>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return "sol"dout";
  return (
    <li className={pizzaObj.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzaObj.photoName} alt="...loading" />
      <div>
        {" "}
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>OUR MENU</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine.5 creative dishes to choose from.All from
            our stone oven, all organic,all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu ,Please come later</p>
      )}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 14;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We are Open Now");
  // } else {
  //   alert("Sorry! We are close now");
  // }
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}.We are open now{" "} */}
      {isOpen ? (
        <div className="order">
          <p> We are open now</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <Order openHour={openHour} closeHour={closeHour} />
      )}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div>
      <p>
        We are open between {openHour}:00. to {closeHour}:00.
      </p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// hfsflsdfsdf
