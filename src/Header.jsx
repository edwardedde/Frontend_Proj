import { Link } from "react-router";

function Header(){
  return(
    <div className="text-white">

      <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-400 drop-shadow-lg">
        Course NotesApp</h1>

      <nav className="flex  gap-6 w-full max-w-m">
        <Link className="w-full text-center py-4 px-8 text-lg font-semibold rounded-xl bg-blue-500 hover:bg-blue-600 transition-all shadow-lg" to={"/"}>
          Home
        </Link>
        <Link className="w-full text-center py-4 px-8 text-lg font-semibold rounded-xl bg-green-500 hover:bg-green-600 transition-all shadow-lg" to={"/CreateNotes"}>
          CreateNotes
        </Link>
        <Link className="w-full text-center py-4 px-8 text-lg font-semibold rounded-xl bg-purple-500 hover:bg-purple-600 transition-all shadow-lg" to={"/ListNotes"}>
          List notes
        </Link>
        <Link className="w-full text-center py-4 px-8 text-lg font-semibold rounded-xl bg-pink-500 hover:bg-pink-600 transition-all shadow-lg" to={"/Courses"}>
          Courses
        </Link>
        <Link className="w-full text-center py-4 px-8 text-lg font-semibold rounded-xl bg-red-500 hover:bg-pink-600 transition-all shadow-lg" to={"/AddCourse"}>
          Add a Course
        </Link>
      </nav>
    </div>
    
  ); 
}

export default Header;