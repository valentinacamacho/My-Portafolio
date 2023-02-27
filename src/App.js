import { Route, Routes } from "react-router";
import Sidebar from "./Layout/Sidebar";
import Principal from "./Pages/Principal";
import Skills from "./Components/Skills";
import Cards from "./Components/Cards"
import Briefcase from "./Components/Briefcase";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Principal/>} />
        <Route path="/Cards" element={<Cards/>} />
        <Route path="/Briefcase" element={<Briefcase/>} />
        <Route path="/Skills" element={<Skills/>} />
      </Routes>
    </div>
  );
}

export default App;