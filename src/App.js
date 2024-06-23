import "./App.css";
import Navar from "./components/Navar";
import About from "./components/About";
import Home from "./components/Home";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const changeMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.querySelector("body").style.backgroundColor = "#071952"
      document.querySelector("body").style.color = "#EBF4F6"
    }else{
      setMode("light")
       document.querySelector("body").style.backgroundColor = "white"
       document.querySelector("body").style.color = "black"

    }
  }

  return (
    <>
      <Router>
        <Navar changeMode = {changeMode} mode= {mode} title = "vikash" />
        <Routes>
          <Route exact path="/home" element={<Home mode={mode} />}></Route>
          <Route exact path="/about" element={<About mode = {mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
