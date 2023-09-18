import React from "react";
import notesStore from "../stores/notesStore";
import Note from "./Note";
import '../styles.css'; // Import the CSS

export default function Notes() {
  const store = notesStore();

  return (
    <div>
      {store.notes && store.notes.map((note) => (
        <div className="note" key={note._id}>
          <Note note={note} />
        </div>
      ))}
    </div>
  );
}
