import React from "react";
import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/images/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/images/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/images/prosciutto.jpg",
    soldOut: false,
  },
];



const App = () => {
  const openTime = 12;
  const closeTime = 22;
  let hour = new Date().getHours();
  const isOpened =
    hour >= openTime && hour <= closeTime 

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer isOpened={isOpened} closeTime={closeTime} openTime={ openTime} />
    </div>
  );
};

const Menu = () => {
  const pizzas = pizzaData.length
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      {pizzas > 0 ? <ul className="pizzas">
        {" "}
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </ul> : <p>Sorry No Product Available as Of Now </p>  }
    </main>
  );
};

const Pizza = ({ pizzaObj }) => {
  return (
    <li className={`pizza ${pizzaObj.soldOut && "sold-out"}`}>

      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price+"$"}</span>
      </div>
    </li>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>THE PIZZA STORY</h1>
    </header>
  );
};

const Footer = ({ isOpened , closeTime , openTime }) => {
  const time = new Date() ;
  return (
    <footer className="footer">

      {isOpened ? <div className="order">
      <p>{time.toLocaleTimeString() } :  {isOpened && "We're Opened"} Till {closeTime}:00</p>
      <button className="btn">Order Now</button>
      </div> : <p>We Will be Happy to Serve You. Please Come Between {openTime} - {closeTime} </p>}
    </footer>
  );
};

export default App;
