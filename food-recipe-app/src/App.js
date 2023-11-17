import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Recipes from './Components/Recipes';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { useState } from 'react';

function App() {
  const [registeredData, setRegisteredData] = useState([]);


  return (
    <>
      <div style={{ background: '#3b8d99' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/login" element={<Login registeredData={registeredData} />} />
          <Route path="/register" element={<Register registeredData={registeredData} setRegisteredData={setRegisteredData} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
