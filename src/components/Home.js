import React, { useState } from "react";

function Home(props) {
  const { mode, showAlert } = props;
  const [text, setText] = useState("");
  const onChangeHandle = (e) => {
    setText(e.target.value);
  };

  const onUpperCase = () => {
    setText(text.toUpperCase());
  };

  const onLowerCase = () => {
    setText(text.toLowerCase());
  };

  const clear = () => {
    setText("");
  };

  const removeExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleCopy =() =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value); 
  }
  return (
    <div className="container">
      <div className="mb-3">
        <h2 className="my-3">Edit your text</h2>
        <textarea
          className="form-control"
          value={text}
          onChange={onChangeHandle}
          id="myBox"
          rows={8}
          style={
            mode === "light"
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: "#088395", color: "#EBF4F6" }
          }
        ></textarea>
        <button
          type="button"
          className={`btn btn-${
            mode === "light" ? "primary" : "secondary"
          } mx-3 my-2`}
          onClick={() => {
            onUpperCase();
            showAlert("text converted to upper case successfully");
          }}
        >
          Uppercase
        </button>
        <button
          type="button"
          className={`btn btn-${
            mode === "light" ? "primary" : "secondary"
          } mx-3 my-2`}
          onClick={() => {
            onLowerCase();
            showAlert("text converted to lower case successfully");
          }}
        >
          Lowercase
        </button>
        <button
          type="button"
          className={`btn btn-${
            mode === "light" ? "primary" : "secondary"
          } mx-3 my-2`}
          onClick={() => {
            clear();
            showAlert("clear text successfully");
          }}
        >
          Clear
        </button>
        <button
          type="button"
          className={`btn btn-${
            mode === "light" ? "primary" : "secondary"
          } mx-3 my-2`}
          onClick={() => {
            handleCopy()
            showAlert("copy text successfully");
          }}
        >
         copy text
        </button>
        <button
          type="button"
          className={`btn btn-${
            mode === "light" ? "primary" : "secondary"
          } mx-3 my-2`}
          onClick={() => {
            removeExtraSpace()
            showAlert("remove extra spaces successfully");
          }}
        >
          remove extra spaces
        </button>
      </div>
      <div className="container my-3">
        <h1>your text summery</h1>
        <p>
          words
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          characters {text.length}
        </p>
        <p>
          {0.008 *
            text.split("").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutess for reading this text content
        </p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Home;
