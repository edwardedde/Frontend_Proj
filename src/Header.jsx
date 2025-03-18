import { Link } from "react-router";

function Header(){
  return(
    <div>

      <h1 className="text-4xl font-bold mb-8
      text-center ">Course NotesApp</h1>

      <nav className="flex space-x-4">
        <Link className="hover:underline" to={"/"}>
          Etusivu
        </Link>
        <Link className="hover:underline" to={"/CreateNotes"}>
          CreateNotes
        </Link>
      </nav>
    </div>
    
  ); 
}

export default Header;