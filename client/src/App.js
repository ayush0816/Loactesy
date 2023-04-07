import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sell from "./components/Sell";
function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Router>  
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sell" elelment={<Sell />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
