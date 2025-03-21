import { Outlet, Routes, Route } from "react-router";
import Header from "./Header";
import CreateNotes from "./CreateNotes";
import ListNotes from "./ListNotes";
import Home from "./Home";

function App() {

  function Layout(){
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  }
  

  return(
    <div className="min-h-screen text flex flex-col items-center p-6 bg-gradient-to-br from-gray-900 to-gray-700 text-white ">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/CreateNotes" element={<CreateNotes />} />
          <Route path="/ListNotes" element={<ListNotes />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App