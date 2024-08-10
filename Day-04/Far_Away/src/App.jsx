import React, { useState } from "react";
import "./App.css";

const initialList = [
  { id: 1, description: "passport", quantity: 2, packed: false },
  { id: 2, description: "luggage", quantity: 4, packed: false },
  { id: 3, description: "clothes", quantity: 20, packed: false },
  { id: 4, description: "laptop", quantity: 2, packed: false },
];

const App = () => {
  const [item , setItem] = useState(initialList)
  function handleAddItem(item){
    setItem(prev => [...prev , item])
  }
  return (
    <div>
      <Logo />
      <Form addItem={handleAddItem} />
      <PackingList initialItem={item} />
      <Stats />
    </div>
  );
};

function Logo() {
  return <h1>🏝️FAR AWAY💼</h1>;
}

function Form({addItem}) {
  
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    const newItem = {
      id : Date.now() , description , quantity ,  packed : false
    }
    addItem(newItem)
    setDescription("")
    setQuantity("")
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => {
          // console.log(e.target.value)
          console.log(item)
          setQuantity(+e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item....."
        value={description}
        onChange={(e) => {
          // console.log(e.target.value)
          setDescription(e.target.value);
        }}
      />
      <button>ADD</button>
    </form>
  );
}

function PackingList({initialItem}) {
  return (
    <div className="list">
      <ul>
        {initialItem.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <>
      <span>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> You x items on your list, and you already packed x (x%)</em>
    </footer>
  );
}

export default App;
