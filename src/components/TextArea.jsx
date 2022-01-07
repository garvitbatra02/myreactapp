import React,{useState} from 'react'

export default function TextArea(props) {
    const [text,setText]=useState("");

    const handleUpClick=()=>{
        // console.log("Upprcase was clicked");
        let newText=text.toUpperCase();

        setText(newText);
        props.showalert("Text has been capatalized","success");
    }
    const handledownClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("Text has been converted to lower case","success");

    }
    const handleOnchange=(event)=>{
        // console.log("on change");
        setText(event.target.value);

    }
    const clear=()=>{
        setText("");
        props.showalert("Textbox cleared","success");

    }

    




    // text="new text";  //wrong way to change state 
    // setText("new text");  //correct way to change state
    return (
        <>
    <div className="mb-3 my-3" style={{color:props.modeval==="dark"?"white":"black"}}>
    <h2>{props.heading}</h2>
    
    <label htmlFor="myBox" className="form-label"></label>
    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.modeval==="dark"?"#b2b5bd":"white",color:props.modeval==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to UPPERCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handledownClick} >Convert to lowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clear} >clear</button>



        <div className="container my-3" style={{color:props.modeval==="dark"?"white":"black"}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{(text.length!=0?text.split(" ").length:0)*0.008} minutes to read</p>
            <h3 className="my-2">preview</h3>
            <p>{text.length>0?text:"enter some text to perform operations"}</p>
        </div>


            </>
    )
}
