import React, { useState } from "react";
import { useNotesStore } from "./stores/useDataStore";

function Courses(){

    
    const [selectedCourse, setSelectedCourse] = useState("");

    const notes = useNotesStore((state) => state.notes)

    const deleteNote = useNotesStore((state) => state.deleteNote);

    const handleDeleteClick = (id) => {
        deleteNote(id);
    };

    const selectedNotes = [];

    for (let note of notes){
        if(note.courseName == selectedCourse){
            selectedNotes.push(
                <li key={note.id}>
                    {note.note}
                    <button onClick={() => handleDeleteClick(note.id)}
                            className="text-red-500 ml-2 hover:underline"
                    >
                        [Delete]
                    </button>
                </li>
            )
        }
    }

    return(
        <div>
                <select //dropdownmenu
                value={selectedCourse} 
                onChange={(e) => setSelectedCourse(e.target.value)}//updates selectedCourse with the choise from the dropdown
                className="border p-2 m-2"
            >
                <option value="">Notes</option>

                {notes.map((note) => ( //maps each coursename as a option in dropdown menu
                    <option key={note.courseName} value={note.courseName}>
                        {note.courseName}
                    </option>
                ))}

            </select>

            <div className="text-white">
                <ul>
                    {selectedNotes.length === 0 ? <p>Ei, muistiinpanoja!</p> : selectedNotes} //conditional render, if the length of selectedNotes is 0 then print the text otherwise print the notes
                </ul>
            </div>
        </div>
    );
}
export default Courses;