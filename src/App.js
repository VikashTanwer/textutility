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

  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState("")
  const showAlert = (e)=>{
    setMsg(e)
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navar changeMode = {changeMode} mode= {mode} title = "vikash" />
        {show && <Alert msg = {msg}/>}
        <Routes>
          <Route exact path="/" element={<Home mode={mode} showAlert = {showAlert} />}></Route>
          <Route exact path="/about" element={<About mode = {mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
