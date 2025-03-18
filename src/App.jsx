import { Outlet, Routes, Route } from "react-router";
import Header from "./Header";
import HomeView from "./Homeview";



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
          <Route path="/HomeView" element={<HomeView />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App