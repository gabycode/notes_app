import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  console.log(notes);

  return (
    <div className="app">
      <div className="left-sidebar">
        <form className="add-note">
          <input
            type="text"
            placeholder="Write a title"
            className="note-title"
          />
          <textarea placeholder="Write here..." className="note-body" />
          <button type="submit">Add note</button>
        </form>
      </div>
      <div className="notes-ui">
        <div className="notes-container">
          <h2>Hello</h2>
          <p>This is a note</p>
        </div>
      </div>
    </div>
  );
}

export default App;
