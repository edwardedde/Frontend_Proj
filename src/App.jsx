import { Outlet, Routes, Route } from "react-router";
import Header from "./Header";
import CreateNotes from "./CreateNotes";



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
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/CreateNotes" element={<CreateNotes />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App