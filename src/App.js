import "./App.css";
import Navar from "./components/Navar";
import About from "./components/About";
import Home from "./components/Home";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navar title = "vikash" />
        <Routes>
          <Route exact path="/home" element={<Home  />}></Route>
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
