import React, { useState } from "react";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const item = event.target.value;
    setInputItem(item);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputItem];
    });
    setInputItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li> {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
