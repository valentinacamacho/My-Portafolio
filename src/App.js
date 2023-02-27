import { Route, Routes } from "react-router";
import Sidebar from "./Layout/Sidebar";
import Principal from "./Pages/Principal";
import Skills from "./Components/Skills";
import Cards from "./Components/Cards"
import Briefcase from "./Components/Briefcase";
import Me from "./Components/Me"

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Principal/>} />
        <Route path="/Me" element={<Me/>} />
        <Route path="/Cards" element={<Cards/>} />
        <Route path="/Briefcase" element={<Briefcase/>} />
        <Route path="/Skills" element={<Skills/>} />
      </Routes>
    </div>
  );
}

export default App;