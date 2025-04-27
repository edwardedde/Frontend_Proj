import { useState } from "react";
import { useNotesStore } from "./stores/useDataStore";

function AddCourse(){

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const addCourse = useNotesStore((state) => state.addCourse);

    const handleAdd = () => {//add the new course object into zustand 
        addCourse({ id, name });//new course object
        setName("");
        setId("");
        alert(`Course ${name} added, id = ${id}`)
    };




    return(
        <div className="">
            <h1 className="pt-7 text-white">
                On thispage you can add a course into the list of courses, empty the input fields after adding.
                the program shows the course name created and the id eg. "Course math added, id = 6".
            </h1>
            <br />

            
            <input  type="text"
                    className="m-6 border-8 border-red-500"
                    placeholder="Coursename" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
            
            <input  type="text"
                    className="m-6 border-8 border-red-500"
                    placeholder="course ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    />
            
            <button className="m-6 border-8 text-red-500 "
                    onClick={handleAdd}
            
            >Add course</button>

            
        </div>
    );
}
 export default AddCourse;