import React, { useState } from "react";

function Home() {
    const [text, setText] = useState("")
    const onChangeHandle = (e)=>{
        setText(e.target.value)
    }

    const onUpperCase =()=>{
        setText(text.toUpperCase())
    }

    const onLowerCase = ()=>{
        setText(text.toLowerCase())
    }

    const clear = ()=>{
        setText("")
    }
  return (
    <div className="container">
      <div className="mb-3">
      <h2 className="my-3">Edit your text</h2>
      <textarea className="form-control" value={text} onChange={onChangeHandle} id = "myBox" rows={8} ></textarea>
      <button type="button" className="btn btn-primary mx-3 my-2" onClick={onUpperCase}>Uppercase</button>
      <button type="button" className="btn btn-primary mx-3 my-2" onClick={onLowerCase}>Lowercase</button>
      <button type="button" className="btn btn-primary mx-3 my-2" onClick={clear}>Clear</button>
      </div>
    </div>
  );
}

export default Home;
