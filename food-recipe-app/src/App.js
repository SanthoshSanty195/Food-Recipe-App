import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Recipes from "./Components/Recipes";
import Home from './Components/Home';

function App() {

  return (
    <>
    <div style={{background:"#3b8d99"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
