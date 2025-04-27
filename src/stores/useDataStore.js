import {create} from 'zustand';

const useNotesStore = create((set) =>({
    
    notes: [],//stores note objects

    addNote: (newNote) =>
        set((state) => ({notes: [...state.notes, newNote] })), //add new note into existing notes

    deleteNote: (id) =>//remove note by id
        set((state) =>({
            notes: state.notes.filter((note) => note.id !== id) //keeps all notes except the one with the same id
        })),

    courses: [],//stores courses from API and user input 

    setCourses: (courseslist) =>
        set({courses: courseslist}), //sets all the fetched courses into the courses array

    addCourse: (newCourse) =>
        set((state) => ({courses: [...state.courses, newCourse] })), //add new course into existing courses
}));

export { useNotesStore };