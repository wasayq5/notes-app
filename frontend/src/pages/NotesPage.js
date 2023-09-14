import notesStore from "../stores/notesStore";
import { useEffect } from "react";
import UpdateForm from "../components/UpdateForm";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";

export default function NotesPage() {
    const store = notesStore();

    // Use effect
    useEffect(() => {
      store.fetchNotes();
    }, []);

    return (
        <div>
            <Notes />
            <UpdateForm />
            <CreateForm />
        </div>
    );
}