import { useNotesStore } from "./stores/useDataStore";
import { useState } from "react";

function ListNotes(){
     
    const notes = useNotesStore((state) => state.notes); //accesses notes in zustand trough notes variable
    const [selectedCourse, setSelectedCourse] = useState(""); //useState for picked course
    

    return(
        <div>
            <h1 className="pt-7 text-red-50"> list notes on this page, filter specific or show all</h1>

            
            <select //dropdownmenu
                value={selectedCourse} 
                onChange={(e) => setSelectedCourse(e.target.value)}//updates selectedCourse with the choise from the dropdown
                className="border p-2 m-2"
            >
                <option value="">Show All</option>

                {notes.map((note) => ( //maps each coursename as a option in dropdown menu
                    <option key={note.courseName} value={note.courseName}>
                        {note.courseName}
                    </option>
                ))}

            </select>

           
            <div className="text-white">
                <ul>
                    {notes.map((note) => {
                        // if selectedCourse is empty show all notes or if selectedCourse name is the same as notes courseName.
                        // courseName then return that courses information
                        if (selectedCourse === "" || note.courseName === selectedCourse){
                            return (
                                <li >
                                    {note.courseName} - {note.id} - {note.note}
                                </li>
                            );
                        }
                        return null;
                    })}       
                </ul>
            </div>
        </div>
    );
}
export default ListNotes;