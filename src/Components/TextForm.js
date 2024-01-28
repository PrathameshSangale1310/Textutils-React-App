
import React, {useState} from 'react'

export default function TextForm(props) {

    
    const handleUpCase=()=>{
        if(text.length!==0){
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
        }
    }
    
    const handleClearText=()=>{
        let newText="";
        setText(newText);
        props.showAlert("All the text is cleared","success");

    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleLoCase=()=>{
        let newText=text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");

    }
    const[text, setText]=useState("");
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
           <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#0c2e3c':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpCase}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoCase}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear Text</button>
        </div>

        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read this paragraph</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
