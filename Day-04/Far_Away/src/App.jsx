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

  function handleDelete(id){
  let afterDelete = item.filter(item=> item.id !== id)
  setItem(afterDelete)
  }

  const [packed , setPacked ] = useState(false)
  return (
    <div>
      <Logo />
      <Form addItem={handleAddItem} />
      <PackingList initialItem={item} handleDelete={handleDelete} />
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

function PackingList({initialItem , handleDelete}) {
  return (
    <div className="list">
      <ul>
        {initialItem.map((item) => (
          <Item item={item} key={item.id} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item , handleDelete  }) {
  
  return (
    <>
    
      <span>
      <input type="checkbox" checked={item.packed} value={packed} />
        {item.quantity} {item.description}
        <button onClick={()=>{
        handleDelete(item.id)
      }}>❌</button>
      </span>
      
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
