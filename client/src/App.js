import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rent from "./components/Rent";
import Sell from "./components/Sell";
import Buy from "./components/Buy";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      
      
      <Router> 
      <Navbar /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/rent" element={<Rent />} />
          <Route exact path="/sell" element={<Sell />} />
          <Route exact path="/buy" element={<Buy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
