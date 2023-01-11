import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase" , "success");
  };
  
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase" , "success");
  };

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleExtraSpaces = () => {
    // console.log("OnChange");
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Remove Extra Spaces", "success");

  };

  const handleCopy = () => {
    //    console.log("Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard" , "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container"  style={{color :props.mode === 'dark'?'white':'#042743'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor :props.mode === 'dark'?'grey':'white', color : props.mode === 'dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 " onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-primary mx-1 my-1"
        >
          Speak
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} > Copy Text</button>
      </div>
      <div className="container2 my-3" style={{color :props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ?text : "Enter Something in textbox above to preview it Here"}</p>
      </div>
    </>
  );
}
