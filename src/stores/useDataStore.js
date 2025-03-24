import {create} from 'zustand';

const useNotesStore = create((set) =>({
    notes: [],
    addNote: (newNote) =>
        set((state) => ({notes: [...state.notes, newNote]})),



}));

export { useNotesStore };