import {create} from 'zustand';

const useNotesStore = create((set) =>({
    
    notes: [],
    addNote: (newNote) =>
        set((state) => ({notes: [...state.notes, newNote] })),

    deleteNote: (id) =>
        set((state) =>({
            notes: state.notes.filter((note) => note.id !== id)
        }))
}));

export { useNotesStore };