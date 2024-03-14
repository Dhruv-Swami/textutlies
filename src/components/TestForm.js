import React, { useState } from "react";

export default function TestForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + "" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleloClick = () => {
    // console.log("uppercase was clicked" + "" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClearClick = () => {
    // console.log("uppercase was clicked" + "" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared ", "success");
  };
  const handleonchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   setText("new text");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <label for="myBox" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
            placeholder="Enter text here"
          ></textarea>
        </div>
        <button
          className="btn-primary mx-2 btn btn-success"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          className="btn-primary mx-2 btn btn-success"
          onClick={handleloClick}
        >
          Convert to lowercase
        </button>
        <button
          className="btn-primary mx-2 btn btn-success"
          onClick={handleClearClick}
        >
          clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview  "}</p>
      </div>
    </>
  );
}
