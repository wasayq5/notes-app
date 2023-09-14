import { create } from 'zustand';
import axios from "axios";

const notesStore = create((set) => ({
    notes: null,

    createForm: {
        title: '',
        body: ''
    },

    updateForm: {
        _id: null,
        title: '',
        body: ''
    },

    fetchNotes: async () => {
        console.log("hi");
        //fetch your notes

        const res = await axios.get('/notes');
        //set to state
        set({notes: res.data.notes,});
    },

    updateCreateFormField: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                createForm: {
                    ...state.createForm,
                    [name]: value,
                },
            };
        });
    },

    createNote: async (e) => {
        e.preventDefault();

        const {createForm, notes} = notesStore.getState();
    
        // Create Note
        const res = await axios.post("/notes", createForm);
        
        // Update state
        set({
            notes: [...notes, res.data.note],
            createForm: {
                title: "",
                body: "",
            }
        });

      },

    deleteNote: async (_id) => {
        //Delete Note
        const res = await axios.delete(`/notes/${_id}`);
    
        //Update State
        const {notes} = notesStore.getState();
        const newNotes = notes.filter((note) => {
          return note._id !== _id;
        });

        set({ notes: newNotes });
    
      },

    handleUpdateFieldChange: (e) => {
        const {value, name} = e.target
        
        set(state => {
            return {
                updateForm: {
                   ...state.updateForm,
                   [name]: value, 
                },
            };
        });
      },

    toggleUpdate: ({ _id, title, body }) => {
        // Set state on update form
        set({
            updateForm: {
                title,
                body,
                _id,
            },
        });

      },

    updateNote: async (e) => {
        e.preventDefault();
    
        const { updateForm: {title, body, _id}, notes } = notesStore.getState();
        //Send update request
        const res = await axios.put(`/notes/${_id}`, {title,body});
    
        console.log(res);
        // Update State
        const newNotes = [...notes];
        const noteIndex = notes.findIndex((note) => {
          return note._id === _id;
        });
    
        newNotes[noteIndex] = res.data.note;

        set({
            notes:newNotes,
            updateForm: {
                _id: null,
                title: "",
                body: "",
            },
        });
    
      },
}));

export default notesStore;