import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");  
  // Change to uppercase
  const handleUpClick = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert('Converted to Uppercase', 'success');
  };
  // Changer to lowercase
  const handleLowClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted to Lowercase", "success");

  };

  // Handle copy function
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  // Clear text area
  const handleClear = () => {
    setText("");
    props.showAlert("Text area cleared", "success");

  };

  // Extra space remover
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "success");

  };

  // onChange handler
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // console.log('total words: ' + words);
  return (
    <>
      <div className="container">
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here..."
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary me-2 mb-2" onClick={handleUpClick}>
          Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary me-2 mb-2" onClick={handleLowClick}>
          Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary me-2 mb-2" onClick={handleCopy}>
          Copy
        </button>
        <button disabled={text.length===0} className="btn btn-primary me-2 mb-2" onClick={handleClear}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary me-2 mb-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container">
        <h1 className="my-2">Text Summary</h1>
        <p>
          <strong>Words: </strong> {text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} | <strong>Characters: </strong>
          {text.length}
        </p>
        <p>
          Approximately <strong>{0.004 * text.split(/\s+/).filter((element) =>{return element.length !== 0}).length}</strong> minutes to read
        </p>
      </div>
    </>
  );
}
