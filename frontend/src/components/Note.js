/* import notesStore from "../stores/notesStore"

export default function Note({ note }) {
    const store = notesStore(store => {
        return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate };
    });

    return (
    <div key={note._id}>
    <h3>{note.title}</h3>
    <h4>{note.body}</h4>
    <button onClick={() => store.deleteNote(note._id)}>Delete Note</button>
    <button onClick={() => store.toggleUpdate(note)}>Update Note</button>
    </div>
    )
} */

import React, { useState } from "react";
import notesStore from "../stores/notesStore";

export default function Note({ note }) {
  const store = notesStore(store => {
    return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate };
  });

  const [expanded, setExpanded] = useState(false); // State to track expansion

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div key={note._id}>
      <h3>{note.title}
      <button onClick={toggleExpansion}
      style={{ borderRadius: '5px' }}>
        {expanded ? "▲" : "▼"}
      </button>
      </h3>
      {expanded && <p>{note.body}</p>} {/* Display body when expanded is true */}
      <button onClick={() => store.deleteNote(note._id)}style={{ borderRadius: '10px' }}>Delete Note</button>
      <button onClick={() => store.toggleUpdate(note)}style={{ borderRadius: '10px' }}>Update Note</button>
    </div>
  );
}


