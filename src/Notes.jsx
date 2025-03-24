import { useNotesStore } from "./stores/useDataStore";
import Note from "./Note";



function Notes(){

    const notes = useNotesStore((state) => state.notes);


    return(
        <div>
            <h3>List of notes</h3>
            <ul>
                {notes.map((note,index) =>{
                    return <Note 
                    key={index}
                    note={note}
                    />
                })}
            </ul>
        </div>
    );
}
export default Notes;