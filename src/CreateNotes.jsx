import { useState } from "react";
import { useNotesStore } from "./stores/useDataStore"; 

function CreateNotes(){//component to create notes
    
    const [note, setNote] = useState(""); //used in textarea to store note
    const [selectedCourse, setSelectedCourse] = useState(""); //used in dropdown menu to store selected name of course
    

    const courses = useNotesStore((state) => state.courses);//zustand datamanagement for global use of courses 
    const setCourses = useNotesStore((state) => state.setCourses);
    
    const addNote = useNotesStore((state) => state.addNote);//variable that accesses zustand store, variable is used to add data into the store
    const notes = useNotesStore((state) => state.notes);//variable used to retrieve data from zustand so it can be displayed later

    
    const handleFetchData = async () => {//function to fetch API data

        const url = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses";    
        const response = await fetch(url);
        const data = await response.json();//stored in variable called data

        const existingCourses = [...courses];

        for (let i = 0; i < data.length; i++ ){

            let exists = false ;

            for (let j = 0; j < courses.length; j++){

                if(data[i].id === courses[j].id){
                    exists = true;
                    break;
                }
            }

            if(!exists){
                existingCourses.push(data[i]);
            }
        }
        
        setCourses(existingCourses);

    };


    const handleClick = () => { //handles adding course objects into zustand store
    
        if(!selectedCourse){//if selectedCourse is still false, meaning if it is still a empty(default) string it will alert you to select a course
            alert("select a course!!!")
            return;
        }
        
        let course; //store found course

        for (let i = 0; i < courses.length; i++) {  //loop through the courses array, if the courses.name of the course at index i matches selectedCourse,
                                                    //  update variable "course" with that course
            if(courses[i].name === selectedCourse){
                course = courses[i];
                break;
            }
            
        }

        const newNote = {id: course.id, courseName: course.name, note: note }//newNote object that will be added to zustand
        
        addNote(newNote);//add to zustand
        setNote(""); //empty textarea
    };


    return(
        <div className="bg-black shadow-md p-6 rounded-lg mt-6 max-w-screen w-full">
            <h4 className="font-semibold text-green-400">Choose course to create a note</h4>
            
            <select //dropdown menu
                value={selectedCourse}//course names
                onChange={(e) => setSelectedCourse(e.target.value)}//when a course name is chosen it sets that name of the course
                onClick={
                    handleFetchData}// eliminates the need of an extra button to fetch data from api, when the dropdown is clicked the data will be fetched
            >
                <option >select course</option>

                {courses.map((course) => (  //maps all of the course names from API as options in dropdown menu
                                            //uses the course unique id as key
                    <option key={course.id} value={course.name} >
                        {course.name} 
                    </option>
                    
                ))}
            </select>

            <textarea //notes text
                type="text"
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}//updates the note with the latest text in the textarea
                className="border p-2 rounded  mb-2 border-black  w-full h-64"
            >
            </textarea>
            
            <button //onclick handles adding of notes text into zustand store
                onClick={handleClick}
                className="bg-blue-300 text-black m-6 px-4 py-2 rounded hover:bg-blue-600"
            >
            SAVE
            </button>
            
           <div className="bg-white">
                <h4 className="text-4xl font-extrabold text-gradient bg-clip-text text-green-400">
                    saved notes:
                </h4>
                <ul>
                    {notes.map((savedNote) => ( //displayes the created notes below, that are created during the session
                        <li key={savedNote.id}>
                            {savedNote.note}
                        </li>
                    ))}
                </ul>
           </div>        
        </div>
    );
}
export default CreateNotes;