import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
  const handleUpClick=()=>{
        let newText = text.toUpperCase()
        setText(newText)
  }

  const handleLoClick=()=>{
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleOnChange=(event)=>{
    setText(event.target.value)
   
}
  const [text, setText] = useState(" ");
//   setText("Enter the appropriate value here");
  return (
  <>
  <div className="container">
  <h1>{props.heading}</h1> 
  <div className="mb-3">
  <textarea className="form-control" id="myBox" rows="10" onChange={handleOnChange} value={text}></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
  </div>
  <div className="container my-3">
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} <b>words</b>, {text.length} <b>charecters</b></p>
    <p>{0.008*text.split(" ").length} <b>minutes to read</b></p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>
  )
}

