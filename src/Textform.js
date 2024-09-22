import React from "react";
import { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("");

  const setupper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.show("text is upper case now","success")
  };
  const onchange = (event) => {
    setText(event.target.value);
  };
  const setlower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.show("text is lower case now","success")
  };
  const voice = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported in this browser.");
    }
  };
  const countWords = (str) => {
    return str
      .trim()
      .split(/\s+/)
      .filter((word) => word !== "").length;
  };
  const clear=()=>{
    setText('')
    props.show("text is clear","success")
  }
  const removeExtraSpaces = () => {
    // Replace multiple spaces with a single space and trim the string
    const newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.show("remove extra spaces","success")
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Text copied to clipboard!');
    } catch (err) {
      alert('Failed to copy text. Please try again.');
    }
    props.show("text is copyed","success")
  };
  const buttonClass = props.mode === "green-mode" ? "btn-danger" : props.mode === "blue-mode" ? "btn-success" : "btn-primary";

  return (
    <>
   
      <div className="container">
      <h2>Enter the text below:</h2>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control w-100"
            value={text}
            onChange={onchange}
            id="exampleFormControlTextarea1"
            rows="6"
          ></textarea>
        </div>
        <button
          type="button"
          className={`btn ${buttonClass} mx-3`}
          onClick={setupper}
        >
          toupper case
        </button>
        <button
          type="button"
          className={`btn ${buttonClass} mx-3`}
          onClick={setlower}
        >
          tolower case
        </button>
        <button type="button" className={`btn ${buttonClass} mx-3`} onClick={voice}>
          voice
        </button>
        <button type="button" className={`btn ${buttonClass} mx-3`} onClick={clear}>
          clear
        </button>
        <button type="button" className={`btn ${buttonClass} mx-3`} onClick={removeExtraSpaces}>
          remove extra space
        </button>
        <button type="button" className={`btn ${buttonClass} mx-3`}onClick={copy}>
          copy all
        </button>
      </div>
      <div className="mx-auto p-2 my-3" style={{ width: '200px' }}>

        <p>
          <strong>Character Count:</strong> {text.length}
        </p>
        <p>
          <strong>Word Count:</strong> {countWords(text)}
        </p>
      </div>
      <div className="mx-auto p-2 bg-body-secondary">
      <h3>preview:</h3>
      <p>{text}</p>
      </div>
      
    </>
  );
};

export default Textform;
