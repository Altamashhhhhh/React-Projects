import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState("");
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    e.preventDefault();
    if (item.trim()) {
      setTodo((prevTodo) => [
        ...prevTodo,
        { task: item, id: uuidv4(), isDone: false }
      ]);
      setItem("");
    }
  }

  function handleDelete(id) {
    const updatedTodo = todo.filter((item) => item.id !== id);
    setTodo(updatedTodo);
  }

  function handleEdit(id, task) {
    setEditId(id);
    setEditText(task);
  }

  function handleUpdate(id) {
    const updatedTodo = todo.map((item) =>
      item.id === id ? { ...item, task: editText } : item
    );
    setTodo(updatedTodo);
    setEditId(null);
    setEditText("");
  }

  function handleComplete(id) {
    const updatedTodo = todo.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodo(updatedTodo);
  }

  return (
    <>
      <div className="App">
        <h1>TODO MANAGER</h1>
        <form onSubmit={handleChange}>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Enter an item to add"
          />
          <button type="submit">ADD</button>
        </form>
        <ol>
          {todo.map((item) => (
            <li key={item.id}>
              {editId === item.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={() => handleUpdate(item.id)}>Save</button>
                  <button onClick={() => { setEditId(null); setEditText(""); }}>Cancel</button>
                </>
              ) : (
                <>
                  <span style={{ textDecoration: item.isDone ? "line-through" : "none" }}>
                    {item.task}
                  </span>
                  <button onClick={() => handleEdit(item.id, item.task)}>Edit</button>
                  <button onClick={() => handleComplete(item.id)}>
                    {item.isDone ? "Incomplete" : "Complete"}
                  </button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
