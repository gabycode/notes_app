import { useState } from "react";
import "./App.css";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [notesList, setNotesList] = useState([]);

  const addNote = (e) => {
    e.preventDefault();
    const newNote = {
      title: noteTitle,
      body: noteBody,
    };
    setNotesList([...notesList, newNote]);
    setNoteTitle("");
    setNoteBody("");
  };

  return (
    <div className="app">
      <div className="left-sidebar">
        <form className="add-note" onSubmit={addNote}>
          <input
            value={noteTitle}
            type="text"
            placeholder="Write a title"
            className="note-title"
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <textarea
            value={noteBody}
            placeholder="Write here..."
            className="note-body"
            onChange={(e) => setNoteBody(e.target.value)}
          />
          <button type="submit">Add note</button>
        </form>
      </div>
      <div className="notes-ui">
        <div className="notes-container">
          {notesList.toReversed().map((note, id) => (
            <div key={id} className="note">
              <h2>{note.title}</h2>
              <p>{note.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
