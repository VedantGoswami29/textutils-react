import { useState } from "react"


function TextForm(props) {
  const [text, setText] = useState('');
  const [word, setWord] = useState(0);
  const handleClick = (e) => {
    setText(e.target.value);
    wordCounter();
  }
  const wordCounter = () => {
    let wordCount = text.split(" ");
    if (text === "") {
      setWord(0);
    } else {
      setWord(wordCount.length);
    }

  }
  const upCase = () => {
    setText(text.toUpperCase());
    props.showAlert("success", "All text converted into UPPERCASE");
  }
  const loCase = () => {
    setText(text.toLowerCase());
    props.showAlert("success", "All text converted into lowercase");
  }
  const removeExtraSpace = () => {
    setText(text.replace(/\s+/g, ' '));
    wordCounter();
    props.showAlert("success", "Extra spaces removed from text");
  }
  const capitalizeEachWord = () => {
    let words = text.split(/\b/);
    for (let i = 0; i < words.length; i++) {
      if (words[i].trim() !== '') {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      }
    }

    setText(words.join(""));
    props.showAlert("success", "Capitalized Each Word")
  }
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("success", "Copied text successfully")
  }
  const clearAll = () => {
    let clear = window.confirm("Do you want to clear all text ? ");
    if (clear) {
      setText('');
      setWord(0);
      props.showAlert("danger", "All text cleared");
    }

  }
  return (
    <>
      <div className="container my-3">
        <div className="form-floating">
          <textarea className="form-control" placeholder="Enter your text here" id="floatingTextarea" onChange={handleClick} style={{ height: "400px" }} value={text}></textarea>
          <label hmtlfor="floatingTextarea">Enter your text here</label>
        </div>
        <div className="my-3">
          <button type="button" className="btn btn-primary mx-1" onClick={upCase}>Upper case</button>
          <button type="button" className="btn btn-primary mx-1" onClick={loCase}>Lower case</button>
          <button type="button" className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra Spaces</button>
          <button type="button" className="btn btn-primary mx-1" onClick={capitalizeEachWord}>Capitalize Each Word</button>
          <button type="button" className="btn btn-primary mx-1" onClick={copyText}>Copy text</button>
          <button type="button" className="btn btn-danger mx-1" onClick={clearAll}>Clear All</button>
        </div>
        <h2>Summary of text</h2>
        <p>Words : {word}</p>
        <p>Characters : {text.length}</p>
      </div>
    </>
  );
}

export default TextForm;