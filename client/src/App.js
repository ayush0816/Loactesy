import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
