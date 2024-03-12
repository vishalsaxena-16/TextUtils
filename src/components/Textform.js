import React, {useState} from 'react'



export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text); 
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text); 
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (event)=>{
    // console.log("on changed")
    setText(event.target.value);
  } 
  const handleClearClick = ()=>{
    // console.log("Uppercase was clicked" + text); 
    let newText = '';
    setText(newText)
  }




const [text, setText] = useState('Enter text here');
  return (
    <div className='container'onChange={handleOnChange} style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black '}}id="myBox" rows="3"></textarea>
  
</div>
<button className="btn btn-primary mx-1"onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1"onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1"onClick={handleClearClick}>Convert to Clear Text</button>
    </div>
  )
}
