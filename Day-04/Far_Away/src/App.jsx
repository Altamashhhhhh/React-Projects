import React, { useState } from "react";
import "./App.css";

const initialList = [
  { id: 1, description: "passport", quantity: 2, packed: false },
  { id: 2, description: "luggage", quantity: 4, packed: false },
  { id: 3, description: "clothes", quantity: 20, packed: false },
  { id: 4, description: "laptop", quantity: 2, packed: false },
];

const App = () => {
  const [items, setItems] = useState(initialList);

  function handleAddItem(item) {
    setItems((prev) => [...prev, item]);
  }

  function handleDelete(id) {
    const afterDelete = items.filter((item) => item.id !== id);
    setItems(afterDelete);
  }

  function handleTogglePacked(id) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(updatedItems);
  }

  return (
    <div>
      <Logo />
      <Form addItem={handleAddItem} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        handleTogglePacked={handleTogglePacked}
      />
      <Stats items={items} />
    </div>
  );
};

function Logo() {
  return <h1>🏝️FAR AWAY💼</h1>;
}

function Form({ addItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    addItem(newItem);
    setDescription("");
    setQuantity("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
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
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

function PackingList({ items, handleDelete, handleTogglePacked }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDelete={handleDelete}
            handleTogglePacked={handleTogglePacked}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, handleDelete, handleTogglePacked }) {
  return (
    <li>
      <span
        style={{
          textDecoration: item.packed ? "line-through" : "none",
        }}
      >
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleTogglePacked(item.id)}
        />
        {item.quantity} {item.description}
        <button onClick={() => handleDelete(item.id)}>❌</button>
      </span>
    </li>
  );
}

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems / totalItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        You have {totalItems} items on your list, and you already packed{" "}
        {packedItems} ({packedPercentage}%)
      </em>
    </footer>
  );
}

export default App;
