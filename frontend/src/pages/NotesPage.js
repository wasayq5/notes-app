import notesStore from "../stores/notesStore";
import { useEffect } from "react";
import UpdateForm from "../components/UpdateForm";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";
import '../styles.css'; // Import the CSS

export default function NotesPage() {
  const store = notesStore();

  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Notes</h1>
      </div>
      <div className="page-content">
        <Notes />
        <div style={{ paddingTop: '30px' }}>
        <div className="form-container">
          <UpdateForm />
        </div>
        <div className="form-container" >
          <CreateForm />
        </div>
        </div>
      </div>
    </div>
  );
}
