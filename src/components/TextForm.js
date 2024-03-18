import React, { useState } from "react";

export default function TextForm(props) {
  let countWords = (text) => {
    text=text.split(" ");
    let count=0;
    for(let i=0;i<text.length;i++)
    {
        if(text[i]==='')
        {
            count++;
        }
    }
    return(text.length-count)
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  };

  const handleClearText=()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text clear","danger");
  }

  
  const handleCopy =()=>{
    // var text=document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","warning");
  }

  const handleUpClick = () => {
    // console.log('uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
  };

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","primary");
  }

  const handleOnChange = (event) => {
    // console.log('On change ');
    setText(event.target.value);
  };



  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className='mb-4'>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{background:props.mode==='dark'?'#001F3F':'white',color:props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Extra spaces
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split().filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing To Preview"}</p>
      </div>
    </>
  );
}
