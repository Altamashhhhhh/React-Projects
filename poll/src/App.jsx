import { useState } from "react";
import "./App.css";
import Poll from "./component/Poll";

function App() {
  const [data, setData] = useState([
    { title: "The Nation Speaks", description: "Should Rapists Be Hanged?" },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showHide, setShowHide] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      alert("Both title and description are required!");
      return;
    }

    if(title.length < 5 || title.length > 30){
      alert("title must be between 5 and 30 Characters")
      return
    }

    if(description.length < 5 || description.length > 60){
      alert("description must be between 5 and 60 Characters")
      return
    }
    setData([...data, { title, description }]);
    setDescription("");
    setTitle("");
  }

  return (
    <>
      <h1>POLL</h1>
      <div className="add-button-container">
        <button
          className="hideshow"
          style={{ backgroundColor: `${showHide ? "red" : "green"}` }}
          onClick={() => setShowHide(!showHide)}
        >
          {showHide ? "HIDE" : "ADD New Poll"}
        </button>
      </div>
      {showHide && (
        <form>
          <input
            type="text"
            
            value={title}
            placeholder="Enter poll title..."
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            
            value={description}
            placeholder="Brief description of the poll..."
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit" onClick={handleChange}>
            ADD
          </button>
        </form>
      )}

      <div className="poll-container">
        {data.map((pollData) => (
          <Poll
            key={pollData.title}
            title={pollData.title}
            description={pollData.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;
