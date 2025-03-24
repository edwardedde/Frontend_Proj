import { useState } from "react";
import { useNotesStore } from "./stores/useDataStore"; 
import {List} from "./List";

function CreateNotes(){
    
    const [note,setNote] = useState("");
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("");
    

    const addNote = useNotesStore((state) => state.addNote);

    
    const handleFetchData = async () => {



            
            const url = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses";
    
            const response = await fetch(url);
    
            const data = await response.json();
    
            setCourses(data);

        };

    const handleClick = () => {
        
        addNote(note);
        setNote(""); 
    };


    return(
        <div className="bg-black shadow-md p-6 rounded-lg mt-6 max-w-screen w-full">
            <h1 className="pt-7 text-white"> On this page you can create notes for a specific course, this page includes a dropdown menu for the course
                you choose, the section for the text input for your notes, and the notes you have already created are listed down below during the session.
                To be able to add a note, you must choose a course!!!
            </h1>
            <br />

            <h4 className="font-semibold text-green-400">Choose course to create a note</h4>
            

            <select 
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                onClick={handleFetchData}
            >
                <option value="">select course</option>
                {courses.map((course) => (
                    <option key={course.id} value={course.name} >
                        {course.name}
                    </option>
                    
                ))}
            </select>


            < textarea
                type="text"
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="border p-2 rounded  mb-2 border-black  w-full h-64"
            >
            </textarea>
            
            <button
                onClick={handleClick}
                className="bg-blue-300 text-black m-6 px-4 py-2 rounded hover:bg-blue-600"
                
            >
            SAVE
            </button>

            
            <List />
            
        </div>
    );
}
export default CreateNotes;