import "./App.css";
import Navbar from "./components/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
