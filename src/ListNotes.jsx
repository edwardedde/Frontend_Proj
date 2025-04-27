import { useNotesStore } from "./stores/useDataStore";
import { useState } from "react";

function ListNotes(){
     
    const notes = useNotesStore((state) => state.notes); //accesses notes in zustand trough notes variable
    const [apiNotes, setApiNotes] = useState([]);

    const [selectedCourse, setSelectedCourse] = useState(""); //useState for picked course

    
    const handleFetchData = async () => {
        const url = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes";
        const fetchedNotes = await fetch(url);
        const data = await fetchedNotes.json();
        setApiNotes(data);
    };
    const allNotes = [ ...notes, ...apiNotes.map(notes => ({
            id: notes.course.id,
            courseName: notes.course.name,
            note: notes.text
        }))
    ];

    const inList = [];
    for (let i = 0; i < allNotes.length; i++) {
        let exists = false;

        for (let j = 0; j < inList.length; j++) {

          if (allNotes[i].courseName === inList[j]) {
            exists = true;
            break;
          }
        }
        if (!exists) {
          inList.push(allNotes[i].courseName);
        }
      }


    return(
        <div>
            <h1 className="text-6xl text-purple-400"> List notes on this page, filter by specific or show all</h1>

            
            <select //dropdownmenu
                value={selectedCourse} 
                onChange={(e) => setSelectedCourse(e.target.value)}//updates selectedCourse with the choise from the dropdown
                className="border p-2 m-2"
                onClick={handleFetchData}
                
            >
                <option value="">Show All</option>

                {inList.map((name) => ( //maps each coursename as a option in dropdown menu
                    <option key={name} value={name}>
                        {name}
                    </option>
                ))}

            </select>

           
            <div className="text-white">
                <ul>
                    {allNotes.map((note, index) => {
                        // if selectedCourse is empty show all notes or if selectedCourse name is the same as notes courseName.
                        // courseName then return that courses information
                        if (selectedCourse === "" || note.courseName === selectedCourse)
                        {
                            return (
                                <li key={index} className="text-purple-400">
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